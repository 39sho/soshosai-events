import styles from "./styles.module.css"

type Props = {
    title: string,
    place: string,
    description: string,
}

const EventCard = ({ title, place, description }: Props) => {
    return (
        <div className={styles.container}>
            <div>{title}</div>
            <div>{description}</div>
            <div>{place}</div>
        </div>
    )
}

export default EventCard