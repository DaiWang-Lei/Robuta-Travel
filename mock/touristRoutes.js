/**
 * 旅游路线
 * */
const touristRoutes =
    {
        id: 1,
        title: "埃及阿斯旺+卢克索+红海Red Sea+开罗+亚历山大12日跟团游(5钻)",
        description: "埃及阿斯旺+卢克索+红海Red Sea+开罗+亚历山大12日跟团游(5钻)·【官方旗舰明星纯玩团】25人封顶|含签证小费全程餐|3晚尼罗河游轮+3晚红海全包度假村+1晚底比斯古都|升级内陆飞机|优质中文导游队伍|七大神庙+赠项目",
        price: 1199,
        originalPrice: 11990,
        discountPresent: 0.1,
        rating: 3.5,
        features: "<div style='color: red'>描述信息: blabla...</div>",
        fees: "<div>价格信息: 只要<span style='color: red'>1999</span></div>",
        notes: "<div style='color: blue'>预定须知</div>",
        touristRoutePictures: [
            {
                url: "https://dimg04.c-ctrip.com/images/0303u120006swk805EF4A_C_480_280_Q100.jpg",
            },
            {
                url: "https://dimg03.c-ctrip.com/images/100p0b00000057x0o1540_C_210_118_Q100.jpg",
            },
            {
                url: "https://dimg03.c-ctrip.com/images/200f0v000000k0r3361EC_C_210_118_Q100.jpg",
            },
            {
                url: "https://dimg04.c-ctrip.com/images/300r13000000uv525D82B_C_210_118_Q100.jpg",
            },
            {
                url: "https://dimg04.c-ctrip.com/images/300v0x000000liuks9C9C_C_210_118_Q100.jpg",
            },
            {
                url: "https://dimg04.c-ctrip.com/images/0302a120008s16afjB861_C_210_118_Q100.png",
            },
        ],
    };

module.exports = (req, res) => {
    setTimeout(() => res.json(touristRoutes), 200);
}
