import PropTypes from 'prop-types';
import Header from '~/layouts/components/Header';
import Sidebar from '~/layouts/components/SideBar';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

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
DelaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};
export default DelaultLayout;
