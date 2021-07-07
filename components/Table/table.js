import { useState } from "react"
import Button from "../Button/button"
import WithDisplayValue from "../WithDisplayValue"
import styles from "./table.module.css"

export default function Table(props) {

    const { rows = [], columns = [], viewTotals = true , handleAdd } = props
    return (
        (columns.length > 0) && <div>
            <Button onClick={handleAdd} />
            <table className={styles.table}>
                {/* headers */}
                <thead>
                    <tr>
                        {columns.map(header => {
                            return <th key={header.key}>
                                <div >{header.name}</div>
                            </th>
                        })}
                    </tr>
                </thead>
                {/* body */}
                <tbody>
                    {/* no data */}
                    {(rows.length === 0) && <tr>{columns.map((header, ind) => <td key={`${header.key}_emptyData`}>---</td>)}</tr>}
                    {/* with data */}
                    {rows.map(doc => {
                        return <tr key={doc.id}>
                            {columns.map(header => {
                                return <td key={`${doc.id}_${header.key}`}>
                                    <WithDisplayValue value={doc[header.key]} />
                                </td>
                            })}
                        </tr>
                    })}
                </tbody>
                {/* totals */}
                {viewTotals &&
                    <tfoot>
                        <tr>
                            {columns.map(header => {
                                let result = "---"
                                return <td key={`${header.key}_total`}>{result}</td>
                            })}
                        </tr>
                    </tfoot>
                }
            </table>
        </div>
    )
}