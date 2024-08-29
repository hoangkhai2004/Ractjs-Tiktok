import { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { FaCommentDots, FaShare } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPlus } from '@fortawesome/free-solid-svg-icons';
import { HeartIcon } from '~/components/Icons';

import styles from './Home.module.scss';
import routes from '~/config/routes';
import Image from '~/components/image';
import Item from './Item/Item';
import Tippy from '@tippyjs/react/headless';

import {
    RepostIcon,
    EmbedIcon,
    ShareIcon,
    FacebookIcon,
    LinkIcon,
    WhatsAppIcon,
    TwitterIcon,
    LinkedlnIcon,
    RedditIcon,
} from '~/components/Icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from '~/components/AccountItem';
import ShareLink from './ShareLink';

const cx = classNames.bind(styles);
const MENU_ITEMS = [
    { icon: { RepostIcon }, title: 'Repost' },
    { icon: { EmbedIcon }, title: 'Embed' },
    { icon: { ShareIcon }, title: 'Send to friends' },
    { icon: { FacebookIcon }, title: 'Share to Facebook' },
    { icon: { LinkIcon }, title: 'Copy Link' },
    { icon: { WhatsAppIcon }, title: 'Share to WhatsApp' },
    { icon: { TwitterIcon }, title: 'Share to Twitter' },
    { icon: { LinkedlnIcon }, title: 'Share to Linkedln' },
    { icon: { RedditIcon }, title: 'Share to Reddit' },
];

function ItemContainer({ data }) {
    const [follow, seFollowing] = useState(false);

    const handleFollowing = () => {
        seFollowing(!follow);
    };
    const renderPreview = (props) => {
        return (
            <div className={cx('preview')} tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview data={data} />
                </PopperWrapper>
            </div>
        );
    };
    const renderShareLink = (props) => {
        return (
            <div className={cx('tooltip-content')} tabIndex="-1" {...props}>
                <PopperWrapper>{/* <ShareLink items={MENU_ITEMS} /> */}</PopperWrapper>
            </div>
        );
    };
    return (
        <div className={cx('item')}>
            <div className={cx('info')}>
                <div>
                    <Tippy interactive delay={[800, 0]} offset={[-20, 0]} placement="bottom" render={renderPreview}>
                        <Link to={routes.profile}>
                            <Image className={cx('avatar')} src={data.user.avatar} alt="1" />
                        </Link>
                    </Tippy>
                </div>

                <button className={cx('follow-btn')} onClick={handleFollowing}>
                    {follow ? (
                        <FontAwesomeIcon className={cx('btn-check')} icon={faCheck} />
                    ) : (
                        <FontAwesomeIcon className={cx('btn-add')} icon={faPlus} />
                    )}
                </button>
                <Item icon={<HeartIcon />} count={data.likes_count} />
                <Item icon={<FaCommentDots />} count={data.comments_count} />
                <Item
                    iconSrc="https://sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/tiktok/webapp/main/webapp-desktop/182b13d35b5b0ee99ac2.png"
                    count={data.views_count}
                />
                <Tippy visible interactive render={renderShareLink}>
                    <div>
                        <Item icon={<FaShare />} count={data.shares_count} />
                    </div>
                </Tippy>
            </div>
        </div>
    );
}

export default ItemContainer;
