import Header from '~/components/Layout/components/Header';
import classNames from 'classnames/bind';
import styles from './DelaultLayout.module.scss';
import Sidebar from './SideBar';

const cx = classNames.bind(styles);
function DelaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default DelaultLayout;
