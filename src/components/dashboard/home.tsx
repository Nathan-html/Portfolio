import Image from "next/image";
import WomenCoffee from "../../public/images/dashboard/undraw_coffee_time_mwfm.svg";
import MenCoffee from "../../public/images/dashboard/undraw_drink_coffee_cqs1.svg";

function HomeSection () {
    return <>
        <Image src={WomenCoffee} alt='women coffee' />
        <Image src={MenCoffee} alt='men coffee' />
    </>
}

export default HomeSection;
