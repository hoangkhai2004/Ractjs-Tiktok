import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';

import styles from './Sidebar.module.scss';
import SuggestedAccounts from '~/components/SuggestedAccounts';

import Menu, { MenuItem } from './Menu';
import {
    HomeIcon,
    HomeActiveIcon,
    UserGroupActiveIcon,
    UserGroupIcon,
    LiveActiveIcon,
    LiveIcon,
    ExploreIcon,
    ExploreActiveIon,
} from '~/components/Icons';
import * as UserServices from '~/Services/UserServices';

import config from '~/config';

const cx = classNames.bind(styles);
const PER_PAGE = 5;
function Sidebar() {
    const profileActiveIcon = null;
    //getSuugessted
    const [suggestedUsers, setsuggestedUsers] = useState([]);
    useEffect(() => {
        UserServices.getSuggested({ page: 1, perPage: PER_PAGE })
            .then((data) => {
                setsuggestedUsers((preUSers) => [...preUSers, ...data]);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem
                    title="Explore"
                    to={config.routes.explore}
                    icon={<ExploreIcon />}
                    activeIcon={<ExploreActiveIon />}
                />

                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
                <MenuItem
                    title="Profile"
                    to={config.routes.profile}
                    avatar
                    icon={
                        'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/10c960446663589dc1d7dcf3d125f5c0.jpeg?lk3s=a5d48078&nonce=92621&refresh_token=b245b66b22455955d19dbaccf156f3cf&x-expires=1723006800&x-signature=mjJtDaLw%2BtUVLNwTSyVkQRmSPFs%3D&shp=a5d48078&shcp=b59d6b55'
                    }
                    activeIcon={profileActiveIcon}
                />
            </Menu>
            <SuggestedAccounts label="Following accounts" data={suggestedUsers} />
        </aside>
    );
}

export default Sidebar;
