import React, { useEffect, useState } from 'react'
import dataValue from '../data.json'
import PopUp from './PopUp'
import {
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
  TableContainer,
} from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import { Link } from 'react-router-dom'
import ImageModal from '../ImageModal'
import './table.css'


export default function TableData() {

  const [input, setInput] = useState(dataValue?.data)
  const [surnName, setSurnName] = useState('')
  const [firstName, setFirstName] = useState('')
  const [middleName, setMiddleName] = useState('')
  const [id, setId] = useState('')
  const [country, setCountry] = useState('')

  const [activeRow, setActiveRow] = useState(null)
  const [activeRowData, setActiveRowData] = useState(false)
  const [items, setItems] = useState([]);

  const handleRowClickColor = (id) => {
    setActiveRow(id)
  }
  
  const handleRowClick = (e) => {
    const search = e.target.id;
     input.forEach((cur) => {
        if (cur.id == search) {
          // setItems()
          // setItems(cur => [...cur])
          setItems(items.concat(cur))
        }
     })
    setActiveRowData(true)
    // setItems()
  }


  const handleSearch = (searchResult) => {
    setInput([searchResult])
  }


  const tableHead =(data) => {
    return (
      <>
        <TableContainer className=" h-[200px] overflow-auto w-full ">
          <Table className="  ">
            <TableHead>
              <tr className=" gap-2  ">
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  ID
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  Action
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  Date activation
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  Gender
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  ActiveStatus
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  Deceerd
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  BirthPlace
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  Address_line
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  Address_city
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  Address_country
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  NameType
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  FirstName
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  middleName
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  Surnname
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  medianName
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  Suffix
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  option
                </TableCell>
              </tr>
            </TableHead>
            <TableBody>
              {input?.map((x, id) => (
                <TableRow
                  className={`bg-${
                    activeRow === x.id
                      ? 'active cursor-pointer  bg-yellow-400'
                      : 'inactive cursor-pointer'
                  }`}
                  onClick={() => handleRowClickColor(x.id)}
                  key={x.id}
                >
                  <TableCell>
                    <button
                      onClick={(e) => handleRowClick(e)}
                      id={x.id}
                      // className="w-[20px]  "
                      className="text-sm w-[20px] "
                    >
                      {x?.id}
                    </button>
                  </TableCell>
                  <TableCell className="w-[20px]">
                    <span
                      onClick={(e) => handleRowClick(e)}
                      id={x.id}
                      className="text-sm"
                    >
                      {x?.action}
                    </span>
                  </TableCell>
                  <TableCell className="w-[20px]">
                    <span
                      onClick={(e) => handleRowClick(e)}
                      id={x.id}
                      className="text-sm"
                    >
                      {x?.date_activation}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span
                      onClick={(e) => handleRowClick(e)}
                      id={x.id}
                      className="text-sm"
                    >
                      {x?.gender}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span
                      onClick={(e) => handleRowClick(e)}
                      id={x.id}
                      className="text-sm"
                    >
                      {x?.active_status}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span
                      onClick={(e) => handleRowClick(e)}
                      id={x.id}
                      className="text-sm"
                    >
                      {x?.deceerd}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span
                      onClick={(e) => handleRowClick(e)}
                      id={x.id}
                      className="text-sm"
                    >
                      {x?.birth_place}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span
                      onClick={(e) => handleRowClick(e)}
                      id={x.id}
                      className="text-sm"
                    >
                      {x?.address_line}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span
                      onClick={(e) => handleRowClick(e)}
                      id={x.id}
                      className="text-sm"
                    >
                      {x?.address_city}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span
                      onClick={(e) => handleRowClick(e)}
                      id={x.id}
                      className="text-sm"
                    >
                      {x?.address_country}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span
                      onClick={(e) => handleRowClick(e)}
                      id={x.id}
                      className="text-sm"
                    >
                      {x?.name_type}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span
                      onClick={(e) => handleRowClick(e)}
                      id={x.id}
                      className="text-sm"
                    >
                      {x?.first_name}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span
                      onClick={(e) => handleRowClick(e)}
                      id={x.id}
                      className="text-sm"
                    >
                      {x?.middle_name}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span
                      onClick={(e) => handleRowClick(e)}
                      id={x.id}
                      className="text-sm"
                    >
                      {x?.Surnname}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span
                      onClick={(e) => handleRowClick(e)}
                      id={x.id}
                      className="text-sm"
                    >
                      {x?.medianName}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span
                      onClick={(e) => handleRowClick(e)}
                      id={x.id}
                      className="text-sm"
                    >
                      {x?.suffix}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-3 items-center cursor-pointer ">
                      <img
                        src="https://i.ibb.co/m0C7yh7/grid.png"
                        className="h-[25px] w-[25px]"
                        alt=""
                      />

                      <ImageModal />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    )
  }

  const tableHead2 =(data) => {
    return (
      <>
        <TableContainer className=" h-[200px] ">
          <Table>
            <TableHead>
              <tr>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  ID
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  Doc Type
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  Value
                </TableCell>
              </tr>
            </TableHead>
            <TableBody>
              {items?.map((x) => (
                <TableRow
                  key={x.id}
                  onClick={() => handleRowClick(x.id)}
                  
                >
                  <TableCell>
                    <span className="text-sm">{x?.id}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.doc_type}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.value}</span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    )
  }

  const tableHead2a =(data) => {
    return (
      <>
        <TableContainer className=" h-[200px] ">
          <Table>
            <TableHead>
              <tr>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  Notes
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  id
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  DeceerdID
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  Description
                </TableCell>
              </tr>
            </TableHead>
            <TableBody>
              {items?.map((x, index) => (
                <TableRow
                  key={x.id}
                  onClick={() => handleRowClick(index)}
                  
                >
                  <TableCell>
                    <span className="text-sm">{x?.notes}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.id}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.deceerd_id}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.description}</span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    )
  }

  const tableHead2b =(data) => {
    return (
      <>
        <TableContainer className=" h-[200px] ">
          <Table>
            <TableHead>
              <tr>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  id
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  Country Type
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  Country Code
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  Name
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  islecopy
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  ph code
                </TableCell>
              </tr>
            </TableHead>
            <TableBody>
              {items?.map((x, index) => (
                <TableRow
                  key={x.id}
                  onClick={() => handleRowClick(index)}
                  
                >
                  <TableCell>
                    <span className="text-sm">{x?.id}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.country_type}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.country_code}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.name}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.islecopy}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.ph_code}</span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    )
  }

  const tableHead2c =(data) => {
    return (
      <>
        <TableContainer className=" h-[200px] ">
          <Table>
            <TableHead>
              <tr>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  id
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  Date type
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  Date
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  Date PM
                </TableCell>
              </tr>
            </TableHead>
            <TableBody>
              {items?.map((x, index) => (
                <TableRow
                  key={x.id}
                  onClick={() => handleRowClick(index)}
                  
                >
                  <TableCell>
                    <span className="text-sm">{x?.id}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.date_type}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.date}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.date_pm}</span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    )
  }


  const tableHead3 =(data) => {
    return (
      <>
        <TableContainer className=" h-[200px] w-[100%] ">
          <Table>
            <TableHead>
              <tr>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  ID
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  List Code
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  Start Date
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  Date Stop
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  Name
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  Status
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  RT
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  Descr2
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  Descr1
                </TableCell>
              </tr>
            </TableHead>
            <TableBody>
              {items?.map((x, index) => (
                <TableRow
                  key={x.id}
                  onClick={() => handleRowClick(index)}
                  
                >
                  <TableCell>
                    <span className="text-sm">{x?.id}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.list_code}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.start_date}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.stop_date}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.name}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.status}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.rt}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.descr2}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.descr1}</span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    )
  }

  const tableHead3b =(data) => {
    return (
      <>
        <TableContainer className=" h-[200px] w-[100%]">
          <Table>
            <TableHead>
              <tr>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  id
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  RoleType
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  Start date
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  Stop date
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  Code
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  Name
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  Take
                </TableCell>
              </tr>
            </TableHead>
            <TableBody>
              {items?.map((x, index) => (
                <TableRow
                  key={x.id}
                  onClick={() => handleRowClick(index)}
                  
                >
                  <TableCell>
                    <span className="text-sm">{x?.id}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.role__type}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.start_date}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.stop_date}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.code}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.name}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.take}</span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    )
  }

  const tableHead4 =(data) => {
    return (
      <>
        <TableContainer className=" h-[200px] overflow-auto ">
          <Table>
            <TableHead>
              <tr>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  ID
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  Assoc Id
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  Ex{' '}
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  Type
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  Red Name
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  Action
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  Date action
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  Gender
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  ActiveStatus
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  Deceased
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  Address_line
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  Address_City
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  Address_Country
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  NameType
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  Tickhoc
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  BirthPlace
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  FirstName
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  middleName
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  Surnname
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  medianName
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  Surffix
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  SinglarName
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  option
                </TableCell>
              </tr>
            </TableHead>
            <TableBody>
              {items?.map((x, index) => (
                <TableRow
                  key={x.id}
                  onClick={() => handleRowClick(index)}
                  
                >
                  <TableCell>
                    <span className="text-sm">{x?.id}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.assoc_id}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.ex}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.type}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.red_name}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.action}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.date_action}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.gender}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.active_status}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.deceased}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.address_line}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.address_city}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.address_country}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.name_type}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.tickhoc}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.birth_place}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.first_name}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.middle_name}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.Surnname}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.medianName}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.suffix}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.singlar_name}</span>
                  </TableCell>

                  <TableCell>
                    <div className="flex gap-3 items-center cursor-pointer ">
                      <img
                        src="https://i.ibb.co/m0C7yh7/grid.png"
                        className="h-[25px] w-[25px]"
                        alt=""
                      />
                      <img
                        src="https://i.ibb.co/7yjxWSv/share.png"
                        className="h-[15px] w-[15px]"
                        alt=""
                      />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    )
  }


  useEffect(() => {}, [input])


  return (
    <div className="max-h-screen ">
      <div className=" flex flex-ro items-center justify-around bg-black">
        <div className="">
          <Link to="/"> {<HomeIcon />} </Link>
        </div>
        <div className="">
          <PopUp
            setSurnName={setSurnName}
            setId={setId}
            setMiddleName={setMiddleName}
            setCountry={setCountry}
            setFirstName={setFirstName}
            surnName={surnName}
            firstName={firstName}
            id={id}
            middleName={middleName}
            country={country}
            input={input}
            setInput={setInput}
            handleSearch={handleSearch}
          />
        </div>
      </div>

      {/* Table 1 */}
      <div className="h-">
        <div className=" mb-6 ">
          <div className=" flex  items-left  bg-purple-200">
            <h4 className="m-3">Person</h4>
          </div>
          {tableHead()}
        </div>

        {/* Table 2 */}

        <div className="lg:flex mb-6  w-1/1 gap-2  ">
          <div className="border w-1/4 ">
            <div className="bg-purple-200">
              <h4 className="m- text-black ">Number</h4>
            </div>
            <div className="overflow-auto   ">
              {activeRowData && tableHead2()}
            </div>
          </div>
          {/* Description */}
          <div className="w-1/4">
            <div className="bg-purple-200">
              <h4 className="m- text-black">Description</h4>
            </div>
            <div className="overflow-auto  ">
              {activeRowData && tableHead2a()}
            </div>
          </div>
          {/* Country */}
          <div className="w-2/4">
            <div className="bg-purple-200">
              <h4 className="m- text-black">Country</h4>
            </div>
            <div className="overflow-auto  ">
              {activeRowData && tableHead2b()}
            </div>
          </div>
          {/* Date */}
          <div className="w-1/4">
            <div className="bg-purple-200">
              <h4 className="m- text-black">Date</h4>
            </div>
            <div className="overflow-auto  ">
              {activeRowData && tableHead2c()}
            </div>
          </div>
        </div>

        {/* Table 3 */}
        <div className="lg:flex mb-6 h- w-1/1 gap-2  ">
          <div className="border w-3/5 ">
            <div className="bg-purple-200">
              <h4 className="m- text-black ">Saction</h4>
            </div>
            <div className="overflow-auto   ">
              {activeRowData && tableHead3()}
            </div>
          </div>
          {/* role */}
          <div className="w-2/5">
            <div className="bg-purple-200">
              <h4 className="m- text-black">Role</h4>
            </div>
            <div className="overflow-auto  ">
              {activeRowData && tableHead3b()}
            </div>
          </div>
        </div>

        {/* Table 4 */}
        <div className=" mb-6 ">
          <div className=" flex  items-left  bg-purple-200">
            <h4 className="m-3">Associates</h4>
          </div>
          <div className="  ">{activeRowData && tableHead4()}</div>
        </div>
      </div>
    </div>
  )
}
