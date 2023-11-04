import EventCard from "../EventCard"
import Search from "../Search"
import styles from "./styles.module.css"
import { useState } from "react"

type Props = {
    events: {
        title: string,
        description: string,
        place: string,
    }[],
}

const EventList = ({ events }: Props) => {
    const [visiblePlace, setVisiblePlace] = useState<string[]>([])

    return (
        <div className={styles.container}>
            <Search events={events} onChange={(place) => setVisiblePlace(place)} />
            <ul className={styles.ul}>
                {
                    events
                        .filter((event) => visiblePlace.includes(event.place))
                        .map(({ title, description, place }) => {
                            return (
                                <li className={styles.li}>
                                    <EventCard title={title} description={description} place={place} />
                                </li>
                            )
                        })
                }
            </ul>
        </div>
    )
}

export default EventList