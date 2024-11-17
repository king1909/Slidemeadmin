import React, { useEffect, useRef, useState } from "react";
import Chart from "./Components/Chart/Chart";
import "./Dashboard.css";
import Map from "./Components/Map/Map";
import Donut from "./Components/Donut/Donut";
import Graph from "./Components/Graph/Graph";
import { data } from "autoprefixer";
function Dashboard() {
  const [dataa, setData] = useState("");
  const dataType = useRef();
  
  const money = [
    {
      id: 1,
      today: 150000,
      thisWeek: 435000,
      thisMonth: 990000,
      thisYear: 1450000
    },
    {
      id: 2,
      today: 15000,
      thisWeek: 35000,
      thisMonth: 90000,
      thisYear: 450000
    },
    {
      id: 3,
      today: 15000,
      thisWeek: 35000,
      thisMonth: 90000,
      thisYear: 450000
    },
  ]
  const coolData = [
    {
      id: 1,
      today: 2100,
      thisWeek: 4654,
      thisMonth: 2220,
      thisYear: 6270,
    },
    {
      id: 2,
      today: 5000,
      thisWeek: 9200,
      thisMonth: 5220,
      thisYear: 107500,
    },
    {
      id: 3,
      today: 2320,
      thisWeek: 14654,
      thisMonth: 52220,
      thisYear: 107270,
    },
    {
      id: 4,
      today: 3100,
      thisWeek: 24654,
      thisMonth: 2220,
      thisYear: 8270,
    },
  ];
  useEffect(() => {
    setData(dataType.current.value);
  });

  return (
    <div>
      <body>
        <div id="wrapper">
          <div id="content-wrapper" className="d-flex flex-column bg-white">
            <div id="content">
              <div className="container-fluid">
                {/* Page Heading */}
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                  <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                  <select
                    ref={dataType}
                    onChange={() => setData(dataType.current.value)}
                    className="form-select max-w-sm"
                  >
                    <option value="1">ข้อมูลของวันนี้</option>
                    <option value="2">ข้อมูลของสัปดาห์นี้</option>
                    <option value="3">ข้อมูลของเดือนนี้</option>
                    <option value="4">ข้อมูลของปีนี้</option>
                  </select>
                </div>

                <div className="row">
                  <div className="col-xl-3 col-md-6 mb-4 box">
                    <div className="card shadow h-100 p-2  second">
                      <div className="card-body">
                        <div className="row no-gutters align-items-center">
                          <div className="col mr-2 mt-2">
                            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                              <p className="font-bold text-[15px] text">
                                จำนวนผู้ให้บริการ
                              </p>
                            </div>
                            <div className="h5 mb-0 font-weight-bold d-flex justify-between align-middle text-gray-800 detail">
                              <p className="text-3xl mt-1">
                                {dataa == 1
                                  ? coolData[0].today
                                  : dataa == 2
                                  ? coolData[0].thisWeek
                                  : dataa == 3
                                  ? coolData[0].thisMonth
                                  : dataa == 4
                                  ? coolData[0].thisYear
                                  : null}
                                <span className="ml-2">คน</span>
                              </p>
                              <span>
                                <i class="bi bi-person-circle fs-2"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Earnings (Monthly) Card Example */}
                  <div className="col-xl-3 col-md-6 mb-4 box">
                    <div className="card border-left-success shadow h-100 p-2 second">
                      <div className="card-body">
                        <div className="row no-gutters align-items-center">
                          <div className="col mr-2 mt-2">
                            <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                              <p className="font-bold text-[15px] text">
                                จำนวน Order
                              </p>
                            </div>
                            <div className="h5 mb-0 font-weight-bold d-flex justify-between align-middle text-gray-800 detail">
                              <p className="text-3xl mt-1">
                                {dataa == 1
                                  ? coolData[1].today
                                  : dataa == 2
                                  ? coolData[1].thisWeek
                                  : dataa == 3
                                  ? coolData[1].thisMonth
                                  : dataa == 4
                                  ? coolData[1].thisYear
                                  : null}
                                <span className="ml-2">ออเดอร์</span>
                              </p>
                              <span>
                                <i class="bi bi-receipt fs-2"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Earnings (Monthly) Card Example */}
                  <div className="col-xl-3 col-md-6 mb-4 box">
                    <div className="card border-left-info shadow h-100 p-2 second">
                      <div className="card-body">
                        <div className="row no-gutters align-items-center">
                          <div className="col mr-2 mt-2">
                            <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                              <p className="font-bold text-[15px] text">
                                จำนวนรถ
                              </p>
                            </div>
                            <div className="row no-gutters align-items-center">
                              <div className="h5 mb-0 font-weight-bold d-flex justify-between align-middle text-gray-800 detail">
                                <p className="text-3xl mt-1">
                                  {dataa == 1
                                    ? coolData[2].today
                                    : dataa == 2
                                    ? coolData[2].thisWeek
                                    : dataa == 3
                                    ? coolData[2].thisMonth
                                    : dataa == 4
                                    ? coolData[2].thisYear
                                    : null}
                                  <span className="ml-2">คัน</span>
                                </p>
                                <span>
                                  <i class="bi bi-truck fs-2"></i>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Pending Requests Card Example */}
                  <div className="col-xl-3 col-md-6 mb-4 box">
                    <div className="card border-left-warning shadow h-100 p-2 second">
                      <div className="card-body">
                        <div className="row no-gutters align-items-center">
                          <div className="col mr-2 mt-2">
                            <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                              <p className="font-bold text-[15px] text">
                                จำนวนผู้ใช้บริการทั้งหมด
                              </p>
                            </div>
                            <div className="h5 mb-0 font-weight-bold d-flex justify-between align-middle text-gray-800 detail">
                              <p className="text-3xl mt-1">
                                {dataa == 1
                                  ? coolData[3].today
                                  : dataa == 2
                                  ? coolData[3].thisWeek
                                  : dataa == 3
                                  ? coolData[3].thisMonth
                                  : dataa == 4
                                  ? coolData[3].thisYear
                                  : null}
                                <span className="ml-2">คน</span>
                              </p>
                              <span>
                                <i class="bi bi-people-fill fs-2"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Content Row */}
                <div className="row">
                  <div className="d-flex p-[2rem] pb-[3.5rem]">
                    <div className="bg-blue-400 rounded-xl text-white w-[30%]">
                      <div className="d-flex p-5 justify-between items-center">
                        <div>
                          <h1>รายรับ</h1>
                          <h4>{dataa == 1 ? money[0].today : dataa == 2 ? money[0].thisWeek : dataa == 3 ? money[0].thisMonth : dataa == 4 ? money[0].thisYear : null} บาท</h4>
                        </div>
                        <div>
                          <i className="bi bi-cash-coin fs-2"></i>
                        </div>
                      </div>
                    </div>

                    <div className="ml-10 bg-green-400 rounded-xl text-white w-[30%]">
                      <div className="d-flex p-5 justify-between items-center">
                        <div>
                          <h1>กำไร</h1>
                          <h4>{dataa == 1 ? money[1].today : dataa == 2 ? money[1].thisWeek : dataa == 3 ? money[1].thisMonth : dataa == 4 ? money[1].thisYear : null} บาท</h4>
                        </div>
                        <div>
                          <i class="bi bi-graph-up fs-2"></i>
                        </div>
                      </div>
                    </div>

                    <div className="ml-10 bg-red-400 rounded-xl text-white  w-[30%]">
                      <div className="d-flex p-5 justify-between items-center">
                        <div>
                          <h1>รายจ่าย</h1>
                          <h4>{dataa == 1 ? money[0].today : dataa == 2 ? money[0].thisWeek : dataa == 3 ? money[0].thisMonth : dataa == 4 ? money[0].thisYear : null} บาท</h4>
                        </div>
                        <div>
                          <i class="bi bi-graph-down-arrow fs-2"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Pie Chart */}
                  <div className="col-xl-3 col-xxl-4 col-lg-6">
                    <div className="card shadow mb-4">
                      <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 className="m-0 font-weight-bold text-primary">
                          ยอดการใช้บริการ
                        </h6>
                      </div>
                      {/* Card Body */}
                      <div className="card-body">
                        <Chart dataa={dataa} />
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-3 col-xxl-4 col-lg-6">
                    <div className="card shadow mb-4">
                      <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 className="m-0 font-weight-bold text-primary text-1xl">
                          ช่วงเวลาที่คนเรียกมากที่สุด
                        </h6>
                      </div>
                      <div className="card-body">
                        <Donut dataa={dataa} />
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-3 col-xxl-4 col-lg-6">
                    <div className="card shadow mb-4">
                      <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 className="m-0 font-weight-bold text-primary">
                          ตำแหน่งที่ผู้ใช้เรียกใช้งานมากที่สุด
                        </h6>
                      </div>
                      <div className="card-body">
                        <Graph data={dataa} />
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-5 col-xxl-6 col-lg-6">
                    <div className="card shadow mb-4">
                      <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 className="m-0 font-weight-bold text-primary">
                          ตำแหน่งที่ผู้ใช้เรียกใช้งานมากที่สุด
                        </h6>
                      </div>
                      <div className="card-body">
                        <Map data={dataa} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default Dashboard;
