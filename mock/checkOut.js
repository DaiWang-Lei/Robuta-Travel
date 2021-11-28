const orderItem = {
    id: '111',
    userId: 'aaaaa',
    state: 'pending',
    orderItems: [
        {
            id: 1,
            originalPrice: 11990,
            discountPresent: 0.1,
            touristRoute: {
                id: 1,
                title:
                    "埃及阿斯旺+卢克索+红海Red Sea+开罗+亚历山大12日跟团游(5钻)...",
                price: 1199,
                touristRoutePictures: [
                    {
                        url: "https://s3.ax1x.com/2020/12/15/rMQOIJ.jpg",
                    },
                ],
                description: "埃及阿斯旺+卢克索+红海Red Sea+开罗+亚历山大12日跟团游(5钻)·【官方旗舰明星纯玩团】25人封顶|含签证小费全程餐|3晚尼罗河游轮+3晚红海全包度假村+1晚底比斯古都|升级内陆飞机|优质中文导游队伍|七大神庙+赠项目",
                originalPrice: 11990,
                discountPresent: 0.1,
                rating: 3.5,
                departureCity: '北京',
                travelDays: 2,
                tripType: '自由行'
            }
        },
        {
            id: 2,
            originalPrice: 10000,
            discountPresent: 0.2,
            touristRoute: {
                id: 2,
                title: "摩洛哥撒哈拉沙漠+卡萨布兰卡+马拉喀什+舍夫沙...",
                price: "2000",
                touristRoutePictures: [
                    {
                        url: "https://s3.ax1x.com/2020/12/15/rMQOIJ.jpg",
                    },
                ],
                description: "埃及阿斯旺+卢克索+红海Red Sea+开罗+亚历山大12日跟团游(5钻)·【官方旗舰明星纯玩团】25人封顶|含签证小费全程餐|3晚尼罗河游轮+3晚红海全包度假村+1晚底比斯古都|升级内陆飞机|优质中文导游队伍|七大神庙+赠项目",
                originalPrice: 10000,
                discountPresent: 0.2,
                rating: 3.5,
                departureCity: '北京',
                travelDays: 2,
                tripType: '自由行'
            }
        },
    ]
}

module.exports = (req, res) => {
    res.json(orderItem);
}
