import React from 'react'
import {
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
  TableContainer,
} from '@mui/material'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <section>
        <div className="bg-gray-700 flex text-white p-4 justify-between">
          <div className="">
            <p>ProReports v.3.1.29h.r46-utf8 {} List paneli</p>
          </div>
          <div className="">
            <p>
              Login:owi-grma <span>Date:2023-02-25</span>
            </p>
          </div>
        </div>
      </section>

      <div className="flex justify-between items-center mx-2 border-b-2 border-gray-500 py-1 my-2">
        <div className="">
          <h3>shcjhgg</h3>
          <div className="">
            <button className="bg-blue-500 p-2 text-md font-semibold text-white text-center">
              menu
            </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-2   ">
          <div className="">
            <label
              className="text-lg text-black font-semibold "
              htmlFor="szukaj"
            >
              szukaj:
            </label>
            <select
              className="text-gray-500 border-2 border-gray-500 "
              name=""
              id=""
            >
              <option value="Gra">Gra</option>
              <option value="Ton">Ton</option>
              <option value="Jhon">Jhon</option>
              <option value="School">School</option>
            </select>
          </div>
          <div className="border-2 border-gray-400">
            <input />
          </div>
          <div className="">
            <button className="bg-gray-400 p-2">Go</button>
          </div>
        </div>
      </div>

      <section>
        <p className="m-4">
          Rekordow: <span>2</span> Strona: <span>1</span> Inne:{' '}
          <span className="text-red-500">(1)</span>
        </p>

        <div className="w-[90%] m-auto">
          <TableContainer className="mb-8   ">
            <Table className="flex gap-4 border-b-2 border-gray-500 cursor-pointer ">
              <TableHead className="">
                <tr className=" ">
                  <TableCell className="bg-gray-200 h-[10px] w-[100px] ">
                    CAP
                  </TableCell>
                  <TableCell className="bg-gray-200 h-[10px] w-[100px]">
                    10
                  </TableCell>
                  <TableCell className="bg-gray-200 h-[10px] w-[100px]">
                    Status
                  </TableCell>
                  <TableCell className="bg-gray-200 h-[10px] w-[100px]">
                    Nazzzz
                  </TableCell>
                  <TableCell className="bg-gray-200 h-[10px] w-[100px]">
                    Copies
                  </TableCell>
                  <TableCell className="bg-gray-200 h-[10px] w-[100px]">
                    legion
                  </TableCell>
                  <TableCell
                    className="bg-gray-200 h-[10px] w-[100px]"
                    style={{ heigh: '20px', width: '' }}
                  ></TableCell>
                </tr>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <h3 className="text-sm hover:bg-gray-400"> ACM</h3>
                    <h3 className="text-sm hover:bg-gray-400"> ACM</h3>
                  </TableCell>
                  <TableCell>
                    <h3 className="text-sm hover:bg-gray-400">10</h3>
                    <h3 className="text-sm hover:bg-gray-400">23</h3>
                  </TableCell>
                  <TableCell>
                    <h3 className="text-sm hover:bg-gray-400">Open</h3>
                    <h3 className="text-sm hover:bg-gray-400">Open</h3>
                  </TableCell>
                  <TableCell>
                    <h3 className="text-sm hover:bg-gray-400">Person</h3>
                    <h3 className="text-sm hover:bg-gray-400">Exacl</h3>
                  </TableCell>
                  <TableCell>
                    <h3 className="text-sm hover:bg-gray-400">perdonal</h3>
                    <h3 className="text-sm hover:bg-gray-400">
                      Excal perdonal
                    </h3>
                  </TableCell>
                  <TableCell>
                    <h3 className="text-sm hover:bg-gray-400">Admin</h3>
                    <h3 className="text-sm hover:bg-gray-400">Admin</h3>
                  </TableCell>

                  <TableCell>
                    <div className="grid gap-3 items-center cursor-pointer ">
                      <Link to="/table">
                        <img
                          src="https://i.ibb.co/m0C7yh7/grid.png"
                          className="h-[25px] w-[25px]"
                          alt=""
                        />
                      </Link>
                      <Link to="/table2">
                        <img
                          src="https://i.ibb.co/m0C7yh7/grid.png"
                          className="h-[25px] w-[25px]"
                          alt=""
                        />
                      </Link>
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        <p className="m-4 float-right">
          Rekordow: <span>2</span> Strona: <span>1</span> Inne:{' '}
          <span className="text-red-500">(1)</span>
        </p>
        </div>
      </section>
    </div>
  )
}
