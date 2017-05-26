import React, { Component } from 'react';
import { Text } from 'react-native';
import { Table, Column, Cell } from 'fixed-data-table';
import 


class Table extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Table'
    };
    constructor(props){
        super(props);

    };
    render() {
        return (
            <Table
                rowHeight={50}]
                headerHeight={50}
                >TABLE</Table>
        );
    };

    fetchData() {
        return {

        }
    }
}

export default Table;
