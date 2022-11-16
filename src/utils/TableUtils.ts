interface MapItemsToTableProps<T extends Record<string, ICell>> {
    headers: string[];
    items: T[];
}

interface ItemAsTable {
    headers: string[];
    rows: IRow[];
}

type IRow = ICell[]

type ICell = string | number | boolean | Date | null | undefined;

export function mapItemsToTable<T extends Record<string, ICell>>({ headers, items }: MapItemsToTableProps<T>): ItemAsTable {
    const rows = items.reduce((acc: IRow[], item) => {
        return [ ...acc, Object.entries(item).filter(([ key ]) => headers.includes(key)).map((i) => i[1]) ]
    }, [])

    return {
        headers,
        rows
    }
}