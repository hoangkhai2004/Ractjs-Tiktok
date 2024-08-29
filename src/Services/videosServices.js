import * as httprequest from '~/utils/httprequest';

export const fetchVideos = async (page = 1) => {
    try {
        const res = await httprequest.get('videos', {
            params: {
                page,
                type: 'for-you',
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
