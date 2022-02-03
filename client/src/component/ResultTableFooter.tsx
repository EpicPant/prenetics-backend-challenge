import React from 'react';

interface FooterProps {
    total: number;
    current_page: number;
    total_page: number
}

class PageLink extends React.Component {
    render() {
        return (
            <li>
                <a>{this.props.children}</a>
            </li>
        )
    }
}

export default class ResultTableFooter extends React.Component<FooterProps> {
    render() {
        return (
            <div id='table-footer'>
                <div id='result-total'>
                    <p>{this.props.total} records in total</p>
                </div>

                <div id="pagination">
                    <ul>

                    </ul>
                </div>
            </div>
        );
    }
}