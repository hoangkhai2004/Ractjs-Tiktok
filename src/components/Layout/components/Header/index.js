import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faUser,
    faCoins,
    faGear,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import styles from './Header.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';

import classNames from 'classnames/bind';
import { UploadIcon, MessageIcon, InboxIcon } from '~/components/Icons';
import Image from '~/components/image';
import Search from '../Search';
const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'vietnamese',
                    code: 'vi',
                    title: 'Tiếng Việt ',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and Help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    //hanle Logic
    const hanleMenuChange = (menu) => {};

    const currentUser = true;
    const UserMenu = [
        { icon: <FontAwesomeIcon icon={faUser} />, title: 'View profile', to: '/@hoaas' },
        { icon: <FontAwesomeIcon icon={faCoins} />, title: 'Get coins', to: '/coin' },
        { icon: <FontAwesomeIcon icon={faGear} />, title: 'Settings', to: '/settings' },
        ...MENU_ITEMS,
        { icon: <FontAwesomeIcon icon={faSignOut} />, title: 'Log out', to: '/logout', separate: true },
    ];
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="TikTok" />
                <Search />
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 200]} content="Upload video">
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>UpLoad</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? UserMenu : MENU_ITEMS} onChange={hanleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/e2dd745098642b6b2ba9223d00892fab.jpeg?lk3s=a5d48078&nonce=14546&refresh_token=6152b000138fd7e83284d625d8d00106&x-expires=1721365200&x-signature=4OVOgjwNwnBpMSMmWGo4%2BvBzcQM%3D&shp=a5d48078&shcp=b59d6b55"
                                alt="Nguyen van a"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
