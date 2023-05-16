import './Search.css';
import { FiX, FiSearch, FiChevronLeft } from 'react-icons/fi';
import {Button} from "react-bootstrap";
import {Form} from "react-bootstrap";
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';
// import { useActions } from '../../hooks/useActions';
import classNames from 'classnames';
// import { useTypedSelector } from '../../hooks/useTypedSelector';
import useOnClickOutside from '../../hooks/useOnClickOutside';
const Search = ({className}) => {
    const [value, setValue] = useState('');
    const [search, setSearch] = useState('');
    const [visible, setVisible] = useState(false);
    // const { setSearch, setVisible } = useActions();
    // const { visible } = useTypedSelector((state) => state.searchReducer);
    const inputRef = useRef(null);
    const formRef = useRef(null);

    const onChangeHandle = (e) => {
        setValue(e.target.value);
    };

    const submitForm = (e) => {
        e.preventDefault();
        setSearch(value);
        //Router redirect on search page
    };

    const handleClearInput = () => {
        setValue('');
        setVisible(false);
    };

    const openSearch = () => {
        setVisible(true);
        inputRef.current?.focus();
    };

    useOnClickOutside(formRef, () => setVisible(false));


    return (
        <>
            <Form onSubmit={submitForm} ref={formRef} className={classNames('search__form', className, visible && 'search__form__visible')}>
                <Form.Control ref={inputRef} className={'search__searchRow'} value={value} onChange={onChangeHandle} placeholder="Поиск..."/>
                <Button type="button" className={'search__hideSearch'} variant="link" onClick={() => setVisible(false)}>
                    <FiChevronLeft />
                </Button>
                <Button type="button" className={classNames('search__closeButton', value && 'search__closeButton_active')} variant="link" onClick={handleClearInput}>
                    <FiX />
                </Button>
                <Button type="button" className={'search__searchButton'} variant="link">
                    <FiSearch />
                </Button>
            </Form>
            <Button className={'search__showSearch'} variant="link" onClick={openSearch}>
                <FiSearch />
            </Button>
        </>
    );
};

export default Search;
