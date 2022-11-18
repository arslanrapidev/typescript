/**
  The goal of this challenge is to build a reusable table component.
  Here are more specific requirements:

  0. You are free to use any react library for this challenge.
  1. The table should be able to render any number of columns (But at least 8 columns for the demo purposes)
  2. Fetch some data from open-sourced APIs (e.g. https://mockyard.herokuapp.com/users/50) or
     generate your own collection (e.g. you can use faker-js for that).
  3. The component should load more data every time when the scroll is about to ends. You
     can fetch or generate 50 rows each time.
  4. Make the component responsive to the browser size.
  5. Scroll to top button should be available when the scroll is not at the top. And when the button
     is clicked, the scroll should be animated to the top.

 Bonus points:
 - For any kind of tests you will write.
 - You don’t need to put a lot of effort into styling, but we’re giving bonus points for nice UI/UX.

*/

import { useEffect, useState } from "react";

import { Table } from "antd";

const { Column } = Table;

export default function TestOne() {
  const [data, setData] = useState([]);

  useEffect(() => {
    window.addEventListener("scroll", loadMore);
    dummyData();
    // return () => {
    //   window.removeEventListener("scroll", loadMore);
    // };
  }, []);
  const loadMore = () => {
    console.log("zxc");
    console.log(document.scrollingElement.scrollHeight);
    console.log(
      Math.ceil(window.innerHeight + document.documentElement.scrollTop)
    );
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.scrollingElement.scrollHeight
    ) {
      // Do load more content here!
      console.log("ok");
      dummyData();
    } else {
      console.log("wow");
    }
  };
  const dummyData = async () => {
    console.log("first");
    const response = await fetch("https://mockyard.herokuapp.com/users/30", {
      method: "GET",
    });
    const fakeData = await response.json();
    console.log(fakeData);
    if (data.length !== 0) {
      console.log("if");
      const arr4 = [...data, ...fakeData];
      //   setData((prevState) => [...prevState, ...fakeData]);
      setData(arr4);
    } else {
      console.log("else");
      setData(fakeData);
    }
  };
  return (
    <div>
      {/* <h2>Test One</h2> */}

      <div>
        {" "}
        <Table pagination={false} dataSource={data}>
          <Column title="Name" dataIndex="name" key="name" />
          <Column title="Email" dataIndex="email" key="email" />
          <Column title="Gender" dataIndex="gender" key="gender" />
          <Column title="Age" dataIndex="age" key="age" />
          <Column title="country" dataIndex="country" key="country" />
        </Table>
      </div>
    </div>
  );
}
