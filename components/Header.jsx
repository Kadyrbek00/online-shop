import Link from "next/link"
import { useRouter } from "next/router"
import style from "../styles/Header/header.module.css"

const namePaths = [
    { id: 1, title: "Главная", path: "/" },
    { id: 2, title: "Корзина", path: "/basket" },
    { id: 3, title: "Акции", path: "/#" },
    { id: 4, title: "Популярные", path: "/#" },
    { id: 5, title: "Новинки", path: "/#" },
    { id: 6, title: "Новости", path: "/#" },
    { id: 7, title: "О", path: "/#" },
    { id: 8, title: "Контакты", path: "/#" },
]

function Header() {
    const { pathname } = useRouter()

    return (
        <nav className={style.nav}>
            {namePaths.map(({ id, title, path }) => {
                return (
                    <Link className={pathname === path ? style.active : null} key={id} href={path}>
                        {title}
                    </Link>
                )
            })}


            <Link className={style.right} href={"/"}>
                Инфо
            </Link>
            <Link href={"/"}>
                Позвонить
            </Link>
        </nav >
    )
}

export default Header