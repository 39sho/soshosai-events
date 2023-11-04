import EventCard from "../EventCard"
import styles from "./styles.module.css"

type Props = {
    events: {
        title: string,
        description: string,
        place: string,
    }[],
}

const EventList = ({ events }: Props) => {
    return (
        <ul className={styles.ul}>
            {
                events.map(({ title, description, place }) => {
                    return (
                        <li className={styles.li}>
                            <EventCard title={title} description={description} place={place} />
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default EventList