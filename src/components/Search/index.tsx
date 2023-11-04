import styles from './styles.module.css'

type Props = {
    events: {
        title: string,
        description: string,
        place: string,
    }[],
    onChange: (place: string[]) => void
}

const Search = ({ events, onChange }: Props) => {
    const places = [...new Set(events.map((event) => event.place))]

    const handleChange = ({ currentTarget }: { currentTarget: HTMLElement }) => {
        if (currentTarget.parentElement != null)
            onChange(
                [...currentTarget.parentElement.children]
                    .flatMap(li => [...li.children])
                    .filter((li) => {
                        return (li as HTMLInputElement).checked
                    })
                    .map(el => el.id)
            )
    }

    return (
        <ul className={styles.container}>
            {
                places.map(place => (
                    <li onChange={handleChange}>
                        <input type="checkbox" id={place} />
                        <label htmlFor={place}>{place}</label>
                    </li>
                ))
            }
        </ul>
    )
}

export default Search