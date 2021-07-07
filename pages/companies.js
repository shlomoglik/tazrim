import { useState } from "react";
import Layout from "../components/Layout/layout"
import Table from "../components/Table/table"

const columns = [
    { key: 'id', name: 'ID' },
    { key: 'title', name: 'TITLE' },
];

const mocks = [
    { id: 0, title: 'Example' },
    { id: 1, title: 'Demo' },
    { id: 2, title: 'Demo1' },
    { id: 3, title: 'Demo2' },
    { id: 4, title: 'Demo3' },
];

export default function Companies() {
    const [rows, setRows] = useState([...mocks])
    const handleAdd = () => {
        const id = rows.reduce((prev, next) => next.id + 1, 0);
        const newRows = [...rows, { id, title: `newOne ${id}` }]
        setRows([...newRows])
    }
    const handleRemove = id => {
        const findDoc = rows.findIndex((item) => item.id === id)
        if (findDoc === -1) throw `doc [${id}] not found`
        let newRows = [...rows]
        newRows.splice(findDoc, 1);
        setRows([...newRows])
    }

    const handleCopy = copyID => {
        const findDoc = rows.find((item) => item.id === copyID)
        if (!findDoc) throw `doc [${copyID}] not found`
        const id = rows.reduce((prev, next) => next.id + 1, 0);
        const newRows = [...rows, { id, title: `copy of ${findDoc.title}` }]
        setRows([...newRows])
    }

    return (
        <Layout>
            <h1 className="title">החברות שלי</h1>
            <Table
                columns={columns}
                rows={rows}
                handleAdd={handleAdd}
                handleCopy={handleCopy}
                handleRemove={handleRemove}
            />
        </Layout>
    )
}