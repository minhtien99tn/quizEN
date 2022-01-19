import { Button, Col, notification, Row, Tabs } from "antd";
import axios from "axios";
import React from "react";
import { useParams } from "react-router";
import Part1 from "./pages/Part1";
import Part13 from "./pages/Part13";
import Part2 from "./pages/Part2";
import Part9 from "./pages/Part9";
import Countdown from 'react-countdown'
const { TabPane } = Tabs;

const ListPart = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = React.useState(false);
  const [data, setData] = React.useState({});

  const [currentTab, setCurrentTab] = React.useState(1);
  const [totalPoint, setTotalPoint] = React.useState(0);
  React.useEffect(() => {
    // IIFE
    setIsLoading(true);
    (async function getExercise() {
      const { data } = await axios.get(
        `https://nikaws.cf/api/getoneexam/${id}`
      );
      console.log({ data });
      if (data) {
        setData(data);
        setIsLoading(false);
      }
    })();
  }, [id]);

  const listTab = [
    {
      title: "Part 1",
      data: data.part1,
      isAudio: false,
      isText: false,
      component: Part1,
    },
    {
      title: "Part 2",
      data: data.part2,
      isAudio: false,
      isText: false,
      component: Part2,
    },
    {
      title: "Part 3",
      data: data.part3dot1,
      isAudio: false,
      isText: true,
      component: Part2,
    },
    {
      title: "Part 4",
      data: data.part3dot2,
      isAudio: false,
      isText: true,
      component: Part1,
    },
    {
      title: "Part 5",
      data: data.part4,
      isAudio: false,
      isText: false,
      component: Part2,
    },
    {
      title: "Part 6",
      data: data.part5,
      isAudio: false,
      isText: false,
      component: Part2,
    },
    {
      title: "Part 7",
      data: data.part6,
      isAudio: false,
      isText: true,
      component: Part13,
    },
    {
      title: "Part 8",
      data: data.part7,
      isAudio: false,
      isText: true,
      component: Part2,
    },
    {
      title: "Part 9",
      data: data.part8,
      isAudio: false,
      isText: true,
      component: Part13,
    },
    {
      title: "Part 10",
      data: data.part9,
      isAudio: true,
      isText: false,
      component: Part9,
    },
    {
      title: "Part 11",
      data: data.part10,
      isAudio: true,
      isText: true,
      component: Part1,
    },
    {
      title: "Part 12",
      data: data.part11,
      isAudio: true,
      isText: false,
      component: Part2,
    },
    {
      title: "Part 13",
      data: data.part12,
      isAudio: true,
      isText: false,
      component: Part13,
    },
    {
      title: "Part 14",
      data: data.part13,
      isAudio: true,
      isText: true,
      component: Part13,
    },
    // {
    //   title: "de moi",
    //   data: data.part13, // part13: server tra ve
    //   isAudio: true,
    //   isText: true,
    //   component: Part13,
    // },
  ];

  const movingTab = (tab, point) => {
    // function handle moving tab (currentTab) -> moving tab
    setCurrentTab(tab);
    setTotalPoint((currentPoint) => currentPoint + point);
  };

  const openNotificationWithIcon = (type) => {
    notification[type]({
      message: "Tổng số điểm của bạn đạt được:",
      description: `${totalPoint}, 🚀🚀🚀`,
    });
  };

  

  return (
    <div className="px-5 py-5">
<CounDownCpn totalPoint={totalPoint} />

      <Row>
        {[...new Array(14)].map((elm, index) => (
          <Col key={index}>
            <Button
              // condition in react component
              type={currentTab === index + 1 ? "primary" : "default"}
              className="mr-2 mb-4"
              onClick={() => setCurrentTab(index + 1)}
            >
              {index + 1}
            </Button>
          </Col>
        ))}
      </Row>
      {Object.keys(data).length !== 0 && (
        <>
          {listTab.map((tab, index) => (
            <>
              {currentTab === index + 1 && (
                <>
                  <tab.component
                    title={tab.title}
                    isAudio={tab.isAudio}
                    isText={tab.isText}
                    data={tab.data}
                    currentTab={currentTab}
                    movingTab={movingTab}
                  />
                </>
              )}
            </>
          ))}
        </>
      )}

      {currentTab === 14 && (
        <Button
          type="ghost"
          danger
          onClick={() => openNotificationWithIcon("success")}
        >
          Show Total Point
        </Button>
      )}
    </div>
  );
};


const CounDownCpn = React.memo(({totalPoint}) => {
  const render = ({minutes, seconds,completed }) => {
    if(completed) {
     
      return null
    }
    return (
      <h1><span>{minutes}:{seconds}</span></h1>
    )
  }
  

  const onComplete = () => {
    notification.success({
      message: "Tổng số điểm của bạn đạt được:",
      description: `${totalPoint}, 🚀🚀🚀`,
    });
  }
  return (
<Countdown date={Date.now() +  60*60*1000 } renderer={render} onComplete={onComplete}/>
  )
})

export default ListPart;
