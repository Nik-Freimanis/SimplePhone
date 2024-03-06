import s from "./header.module.scss";
import star from '../../assets/star.svg'
import Image from "next/image";

export function Header() {
  return (
    <header className={s.header}>
      <Image src={star} alt={'logo'} />
    </header>
  );
}
