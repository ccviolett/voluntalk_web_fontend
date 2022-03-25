function Card(props) {
    return React.createElement(
        "div",
        { className: "mdui-card" },
        React.createElement(
            "div",
            { className: "mdui-card-header" },
            React.createElement("img", { className: "mdui-card-header-avatar",
                src: props.avatar }),
            React.createElement(
                "div",
                { className: "mdui-card-header-title" },
                props.name
            ),
            React.createElement(
                "div",
                { className: "mdui-card-header-subtitle" },
                props.quote
            )
        ),
        React.createElement(
            "div",
            { className: "mdui-card-media" },
            React.createElement("img", { src: props.imgurl }),
            React.createElement(
                "div",
                { className: "mdui-card-media-covered" },
                React.createElement(
                    "div",
                    { className: "mdui-card-primary" },
                    React.createElement(
                        "div",
                        { className: "mdui-card-primary-title" },
                        props.school
                    )
                )
            )
        ),
        React.createElement(
            "div",
            { className: "mdui-card-actions" },
            React.createElement(
                "button",
                { className: "mdui-btn mdui-ripple mdui-ripple-white" },
                "\u67E5\u770B\u8BE6\u60C5"
            ),
            React.createElement(
                "button",
                { className: "mdui-btn mdui-ripple mdui-ripple-white" },
                "\u53D1\u8D77\u54A8\u8BE2"
            )
        )
    );
}

ReactDOM.render(React.createElement(
    "div",
    null,
    React.createElement(Card, {
        name: "\u7F57\u6F47\u9633",
        avatar: "https://s2.loli.net/2022/03/25/G3C2rikzAgo9PQf.jpg",
        quote: "\u613F\u4F60\u6210\u4E3A\u81EA\u5DF1\u7684\u592A\u9633\uFF0C\u65E0\u9700\u501F\u52A9\u522B\u4EBA\u7684\u5149\u3002",
        shcool: "\u4E1C\u5317\u5927\u5B66\u79E6\u7687\u5C9B\u5206\u6821",
        imgurl: "https://www.neuq.edu.cn/images/20211129.jpg"
    }),
    React.createElement(Card, {
        name: "\u5F20\u7D2B\u742A",
        avatar: "https://s2.loli.net/2022/03/25/UqHuzIywDBlWPjC.jpg",
        quote: "\u5982\u679C\u6491\u4F1E\u4E0D\u591F\u8BDA\u610F\uFF0C\u90A3\u6211\u5C31\u6DCB\u96E8\u7231\u4F60",
        shcool: "\u4E1C\u5317\u5927\u5B66\u79E6\u7687\u5C9B\u5206\u6821",
        imgurl: "https://www.neuq.edu.cn/images/20211129zhiyuanting.jpg"
    }),
    React.createElement(Card, {
        name: "\u5B97\u7433\u6615",
        avatar: "https://s2.loli.net/2022/03/25/TNopxjtU4D2lAWY.jpg",
        quote: "\u5E0C\u671B\u6211\u4EEC\u90FD\u80FD\u591F\u5982\u613F\u4EE5\u507F",
        shcool: "\u4E1C\u5317\u5927\u5B66\u79E6\u7687\u5C9B\u5206\u6821",
        imgurl: "https://www.neuq.edu.cn/images/20211129.jpg"
    }),
    React.createElement(Card, {
        name: "\u6F58\u4E50\u6D0B",
        avatar: "https://s2.loli.net/2022/03/25/27fcM6t4lIpCe5F.jpg",
        quote: "\u6240\u7231\u9694\u5C71\u6D77\uFF0C\u5C71\u6D77\u4EA6\u53EF\u5E73",
        shcool: "\u4E1C\u5317\u5927\u5B66\u79E6\u7687\u5C9B\u5206\u6821",
        imgurl: "https://www.neuq.edu.cn/images/20211129.jpg"
    }),
    React.createElement(Card, {
        name: "\u66F9\u5609\u745C",
        avatar: "https://s2.loli.net/2022/03/25/GB5wgiQob4aLSej.jpg",
        quote: "\u539A\u79EF\u8584\u53D1",
        shcool: "\u4E1C\u5317\u5927\u5B66\u79E6\u7687\u5C9B\u5206\u6821",
        imgurl: "https://www.neuq.edu.cn/images/20211129.jpg"
    }),
    React.createElement(Card, {
        name: "\u8D75\u79D1\u5C27",
        avatar: "https://s2.loli.net/2022/03/25/8AZRcCBoQkUIgnD.jpg",
        quote: "\u656C\u8FD9\u5927\u4E89\u4E4B\u4E16 \u656C\u8FD9\u5C0F\u914C\u4E4B\u65F6",
        shcool: "\u4E1C\u5317\u5927\u5B66\u79E6\u7687\u5C9B\u5206\u6821",
        imgurl: "https://www.neuq.edu.cn/images/20211129.jpg"
    }),
    React.createElement(Card, {
        name: "\u674E\u534E\u5B87",
        avatar: "https://s2.loli.net/2022/03/25/whXprN8FTjn6z5f.jpg",
        quote: "\u5C71\u6C34\u842C\u7A0B\uFF0C\u7686\u8981\u597D\u8FD0",
        shcool: "\u4E1C\u5317\u5927\u5B66\u79E6\u7687\u5C9B\u5206\u6821",
        imgurl: "https://www.neuq.edu.cn/images/20211129.jpg"
    })
), document.getElementById("communicate-new-tab"));