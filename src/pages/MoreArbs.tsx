import { FC, useEffect, useState } from "react";
import NavigationBar from "../components/NavigationBar";

// icons
import { gql, useQuery } from "@apollo/client";

import { ArbData, returnData } from "../interface/common"
import Arb from "../components/Arb";

import { useNavigate, useParams } from "react-router-dom"

const GETARBSANDUSER = gql`
query Query($getArbId: ID) {
  getUser {
    subscribed
  }
  getArb(id: $getArbId) {
    status
    message
    arbs {
      initiator {
        bookmaker
        value
        name
        link
				league
				odds_type
      }
      regular {
        bookmaker
        value
        name
        link
				league
				odds_type
      }
      sport
      time
      lifetime
    }
  }
}
`


interface IGetArbs extends returnData {
  arbs: ArbData[]
}

interface IGetUser {
  subscribed: boolean;
}

interface IQueryParmas {
  getArbId: string;
}

const Surebets: FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { loading, data, error, refetch } = useQuery<{ getUser: IGetUser | null, getArb: IGetArbs }, IQueryParmas>(GETARBSANDUSER, {
    variables: {
      getArbId: id || "",
    }
  })

  useEffect(() => { refetch() }, [])

  useEffect(() => {
    if (!data) return;
    if (!data.getUser?.subscribed) return navigate("/pricing")
  }, [])

  if (loading) return (
    <div>
      <NavigationBar />
      <div className="w-full h-full flex justify-center items-center">
        <p>loading...</p>
      </div>
    </div>
  )

  if (error) return (
    <div>
      <pre>{JSON.stringify(error, null, 2)}</pre>
    </div>
  )

  if (data?.getArb.status === "failed") return (
    <div>
      <NavigationBar />
      <div className="w-full h-full flex justify-center items-center">
        <p>scraping network</p>
      </div>
    </div>
  )

  return (
    <div>
      <NavigationBar />
      <div className="pb-14 lg:px-60 md:px-32">
        <div className="mx-3 mt-8">
          <div>
            <div className="flex">
              <h6 className="w-[100px] py-2 px-3">Profit</h6>
              <h6 className="w-[100px] py-2 px-3">Event</h6>
            </div>
            <div className="space-y-8">

              {data?.getArb.arbs.map(arb => {
                return (
                  <Arb {...arb}
                    subscribed
                    secondary
                  // subscribed={true}
                  />
                )
              })}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Surebets;
