import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './item.module.scss';

const cx = classNames.bind(styles);

function Item({ iconSrc, icon, count }) {
    return (
        <div className={cx('wrapper')}>
            <button className={cx('btn')}>
                {iconSrc ? (
                    <span className={cx('icon')}>
                        <img src={iconSrc} alt="icon" className={cx('img-item')} />
                    </span>
                ) : (
                    <span className={cx('icon')}>{icon}</span>
                )}
                <strong className={cx('count')}>{count} </strong>
            </button>
        </div>
    );
}
Item.propTypes = {
    iconSrc: PropTypes.string,
    icon: PropTypes.node,
    count: PropTypes.string.isRequired,
};
export default Item;
