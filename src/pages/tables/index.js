import React from 'react';
import {Table, TableWrapper} from '../../components';


const TablePage = () => {
    return (
        <div style={{ width: "60%", margin: "3% auto" }}>
            <Table>
                <table>
                    <thead>
                        <tr>
                            <th>Header one</th>
                            <th>Header two</th>
                            <th>Header three</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                Data one
                            </td>
                            <td>
                                Data two
                            </td>
                            <td>
                                Data three
                            </td>
                        </tr>
                    </tbody>
                </table>
            </Table>
            <br />
            <Table stripe>
                <table>
                    <thead>
                        <tr>
                            <th>Header one</th>
                            <th>Header two</th>
                            <th>Header three</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                Data one
                            </td>
                            <td>
                                Data two
                            </td>
                            <td>
                                Data three
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Data one
                            </td>
                            <td>
                                Data two
                            </td>
                            <td>
                                Data three
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Data one
                            </td>
                            <td>
                                Data two
                            </td>
                            <td>
                                Data three
                            </td>
                        </tr>
                    </tbody>
                </table>
            </Table>
            <br />
            <Table strip naked>
                <table>
                    <thead>
                        <tr>
                            <th>Header one</th>
                            <th>Header two</th>
                            <th>Header three</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                Data one
                            </td>
                            <td>
                                Data two
                            </td>
                            <td>
                                Data three
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Data one
                            </td>
                            <td>
                                Data two
                            </td>
                            <td>
                                Data three
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Data one
                            </td>
                            <td>
                                Data two
                            </td>
                            <td>
                                Data three
                            </td>
                        </tr>
                    </tbody>
                </table>
            </Table>
            <br />
            <Table naked>
                <table>
                    <thead>
                        <tr>
                        <th>Header one</th>
                        <th>Header two</th>
                        <th>Header three</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                Data one
                            </td>
                            <td>
                                Data two
                            </td>
                            <td>
                                Data three
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Data one
                            </td>
                            <td>
                                Data two
                            </td>
                            <td>
                                Data three
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Data one
                            </td>
                            <td>
                                Data two
                            </td>
                            <td>
                                Data three
                            </td>
                        </tr>
                    </tbody>
                </table>
                </Table>
            
            <br />
        </div>
    )
}

export default TablePage