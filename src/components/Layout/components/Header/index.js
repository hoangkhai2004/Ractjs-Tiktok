import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faSearch } from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.scss';
import images from '~/assets/images';
const cx = classNames.bind(styles);
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="TikTok" />
                <div className={cx('search')}>
                    <input placeholder="Search accounts and videos" spellCheck={false} />
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <button className={cx('loading')}>
                        <FontAwesomeIcon icon={faSpinner} />
                    </button>
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
                <div className={cx('actions')}></div>
            </div>
        </header>
    );
}

export default Header;
