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
        this.setState({ inputValue: target.value });
    };

    saveToLocalStore = (): void => {
        const { inputValue } = this.state;
        localStorage.setItem('inputValue', JSON.stringify(inputValue));
    };

    componentDidMount(): void {
        window.addEventListener('beforeunload', this.saveToLocalStore);
    }

    componentWillUnmount(): void {
        this.saveToLocalStore();
        window.removeEventListener('beforeunload', this.saveToLocalStore);
    }

    render() {
        return (
            <input
    placeholder="Search Bar"
    autoComplete="off"
    type="search"
    onChange={this.handleInput}
    value={this.state.inputValue}
    style={{
        margin: '20px',
    }}
    />
        );
    }
}

export default SearchBar;
