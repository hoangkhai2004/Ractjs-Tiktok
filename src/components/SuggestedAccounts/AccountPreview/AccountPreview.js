import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import styles from './AccountPreview.moudle.scss';
import Button from '~/components/Button';
const cx = classNames.bind(styles);
function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/8689cedb598e09d1da594360e7aa5b10.jpeg?lk3s=30310797&nonce=41414&refresh_token=b0f0ea770805e91fa90d1e87c309953f&x-expires=1722690000&x-signature=NT0CYGBT1A54UvZA8uDwKY04wPU%3D&shp=30310797&shcp=-"
                    alt=""
                />
                <Button className={cx('follow-btn')} primary>
                    Follow
                </Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>nguyen Hoang Khai</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>nguyenHoangKhai</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}> Follow</span>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}> Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
