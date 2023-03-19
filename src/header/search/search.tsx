import React from 'react';

class SearchBar extends React.Component<unknown, { inputValue: string }> {
    constructor(props: unknown) {
        super(props);
        let storageInputValue = localStorage.getItem('inputValue') || '';
        if (storageInputValue) {
            storageInputValue = JSON.parse(storageInputValue);
        }
        this.state = { inputValue: storageInputValue || '' };
    }

    handleInput = (e: { target: HTMLInputElement }): void => {
        const target: HTMLInputElement = e.target as HTMLInputElement;
        localStorage.setItem('inputValue', JSON.stringify(target.value));
        this.setState({ inputValue: target.value });
    };

    render() {
        return (
            <input
    placeholder="Search Bar"
    autoComplete="off"
    type="search"
    onChange={this.handleInput}
    value={this.state.inputValue}
    />
        );
    }
}

export default SearchBar;
