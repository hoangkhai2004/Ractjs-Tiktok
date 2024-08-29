import { Link } from 'react';

import classNames from 'classnames/bind';
import styles from './ShareLink.module.scss';
const cx = classNames.bind(styles);
function shareLink({ children, items = [] }) {
    return (
        <div className={cx('wrapper')}>
            <Link className={cx('link')} to="/">
                <span className={cx('icon')}></span>
                <span className={cx('title')}>{title}</span>
            </Link>
        </div>
    );
}

export default shareLink;
