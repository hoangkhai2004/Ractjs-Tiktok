import PropTypes from 'prop-types';
import { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Header from './Header';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);
const defaultFn = () => {};

function Menu({ children, items = [], hideOnClick = false, onChange = defaultFn, ...passProps }) {
    const [history, sethistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onclick={() => {
                        if (isParent) {
                            sethistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };
    const handleResetMenu = () => {
        sethistory((prev) => prev.slice(0, 1));
    };
    const handleBack = () => {
        sethistory((prev) => prev.slice(0, prev.length - 1));
    };
    return (
        <Tippy
            {...passProps}
            interactive
            delay={[0, 700]}
            offset={[12, 8]}
            hideOnClick={hideOnClick}
            placement="bottom-end"
            render={(atrrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...atrrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && <Header title={current.title} onback={handleBack} />}
                        <div className={cx('menu-body')}>{renderItems()}</div>
                    </PopperWrapper>
                </div>
            )}
            onHide={handleResetMenu}
        >
            {children}
        </Tippy>
    );
}
Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
};
export default Menu;
