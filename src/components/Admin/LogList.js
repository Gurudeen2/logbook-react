import React from "react";
import Table from "../UI/Table";

const LogList = () => {
  const dummy_data = [
    {
      name: "Fatai AKeem",
      state: "Osun State",
      mobilenumber: "080636412",
      nextofkin: "Oyetunji Yusuf",
      nextnumber: "08142392527",
      description: "signin",
      signdate: "03-03-2023",
    },
    {
      name: "Fatai Akeem",
      state: "Osun State",
      mobilenumber: "08063641230",
      nextofkin: "Oyetunji Yusuf",
      nextnumber: "08142392527",
      description: "signout",
      signdate: "04-03-2023",
    },
  ];
  return (
    <React.Fragment>
      <Table datas={dummy_data} />
    </React.Fragment>
  );
};

export default LogList;
