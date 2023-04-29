import Imap from 'imap'
import { NextApiRequest, NextApiResponse } from 'next'
import { inspect } from 'util'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    // Check if env variables is correct
    if (
      typeof process.env.IMAP_EMAIL === 'string' &&
      typeof process.env.IMAP_PASSWORD === 'string' &&
      typeof process.env.IMAP_HOST === 'string' &&
      typeof process.env.IMAP_PORT === 'string'
    ) {
      // create the IMPA object
      const imap = new Imap({
        user: process.env.IMAP_EMAIL,
        password: process.env.IMAP_PASSWORD,
        host: process.env.IMAP_HOST,
        port: parseInt(process.env.IMAP_PORT),
        tls: true
      });

      function openInbox(cb) {
        imap.openBox('INBOX', true, cb);
      }

      imap.once('ready', function () {
        openInbox(function (err: Error, box) {
          if (err) throw err;

          // fetch
          const f = imap.seq.fetch(`1:1`, {
            bodies: 'HEADER.FIELDS (FROM TO SUBJECT DATE)',
            struct: true
          });

          // seqno = number of the iteration
          f.on('message', function (msg, seqno) {
            console.log('Message #%d', seqno);
            const prefix = `(#' ${seqno} ') `;
            msg.on('body', function (stream, info) {
              let buffer = '';
              stream.on('data', function (chunk) {
                buffer += chunk.toString('utf8');
              });
              stream.once('end', function () {
                console.log(prefix + 'Parsed header: %s', inspect(Imap.parseHeader(buffer)));
              });
            });
            msg.once('attributes', function (attrs) {
              console.log(prefix + 'Attributes: %s', inspect(attrs, false, 8));
            });
            msg.once('end', function () {
              console.log(prefix + 'Finished');
            });
          });
          f.once('error', function (err) {
            console.log('Fetch error: ' + err);
          });
          f.once('end', function () {
            console.log('Done fetching all messages!');
            imap.end();
          });
        });
      });

      // Error imap
      imap.once('error', function (err: Error) {
        console.error(err);
      });

      // Connection ended
      imap.once('end', function () {
        console.log('Connection ended');
      });

      imap.connect();

      res.status(200).json('TODO best res')
    } else {
      res.status(400).json('Properties of IMPA don\'t have good types')
    }
  } else {
    res.status(405).json('Method Not Allowed')
  }
}