import { FC, useState, useRef, useLayoutEffect, useEffect } from "react";
import { ArbData, ArbInit } from "../interface/common";


import { MdClose, MdOutlineLaunch, MdAutorenew } from "react-icons/md";
import { MdCalculate } from "react-icons/md";
import Input from "../components/Input";

import { useNavigate } from "react-router-dom";
import { numberWithCommas, round } from "../helper/helper";

export interface IArbProps extends ArbData {
  subscribed: boolean;
  secondary?: boolean;
}

const Arb: FC<IArbProps> = ({ initiator, redirects, regular, sport, subscribed, time, secondary, id, lifetime }) => {
  const navigate = useNavigate();

  const [initiatorOdds, setInitiatorOdds] = useState<number>(Number(initiator.value));
  const [regularOdds, setRegularOdds] = useState<number>(Number(regular.value));
  const [amount, setAmount] = useState<number>(100);

  // amount dist
  const [initiatorAmountDist, setInitiatorAmountDist] = useState<number>(0);
  const [regularAmountDist, setRegularAmountDist] = useState<number>(0);

  const profitPercentage = 100 - ((100 / Number(initiator.value)) + (100 / Number(regular.value)))
  const [percentageProfit, setPercentageProfit] = useState<number>(round(profitPercentage, 2))

  const [total, setTotal] = useState<number>(profitPercentage * amount / 100);

  const [showCalculator, setShowCalculator] = useState<boolean>(false);
  const table = useRef<HTMLDivElement>(null);

  // handlers
  useEffect(() => {
    const dist = (value: number): number => {
      const oddOfOutcome = Number(value);
      const totalStake = Number(amount);

      const probOutcome = 100 / oddOfOutcome;
      const percentageTotalArb = percentageProfit;

      const inidividualBet = (totalStake * probOutcome) / percentageTotalArb;
      return round(inidividualBet, 1)
    }
    setInitiatorAmountDist(dist(initiatorOdds))
    setRegularAmountDist(dist(regularOdds))

    const profitPercentage = 100 - ((100 / Number(initiatorOdds)) + (100 / Number(regularOdds)))
    setPercentageProfit(round(profitPercentage, 2))
    setTotal(profitPercentage * amount / 100)
  }, [initiatorOdds, regularOdds, amount]);

  useLayoutEffect(() => {
    if (!table) return;
    if (showCalculator) table.current?.scrollBy(table.current?.scrollWidth, 0);
    // console.log("running");
  }, [showCalculator]);

  const handleShowCalculator = (): void => {
    setShowCalculator((state) => !state);
  };

  const generateLink = () => {
    // console.log("generating link");
    // console.log(secondary);
    // console.log(redirects);
    // console.log(id);
    if (secondary) return;
    // const linkBody = redirects.split("=").at(-1)?.split(">")[0].split("/").at(-1);
    const body = redirects?.split(">").at(-2)?.split("<")[0];

    const handleGo = () => {
      if (subscribed) {
        navigate(`/more_arbs/${id}`)
      } else {
        navigate("/pricing")
      }
    }

    return <p onClick={handleGo}>{body}</p>
  }

  return (
    <div ref={table} className="w-full overflow-x-auto">
      <table className="w-full">
        <tr className="bg-slate-200">
          <th className="py-2  min-w-[125px] w-[125px] capitalize text-left pl-2">
            <h6>{percentageProfit}%</h6>
            <p className="font-normal text-sm">{lifetime}</p>
          </th>
          <th className="py-2 min-w-[175px] w-[250px] capitalize text-left">
            <h6>{sport}</h6>
            <p className="font-normal text-sm">{time}</p>
          </th>
          <th className=" min-w-[100px]">
            <p className="font-normal">
              {"(Games/Points)"}
            </p>
          </th>
          {showCalculator && (
            <>
              <th className=" min-w-[120px]">
                <p className="font-normal">Odds</p>
              </th>
              <th className=" min-w-[125px]">
                <p className="font-normal">Bet</p>
              </th>
              {/* <th className=" min-w-[100px]">
                <p className="font-normal">Currency</p>
              </th> */}
              {/* <th className=" min-w-[50px]">
                <p className="font-normal">D</p>
              </th>
              <th className=" min-w-[50px]">
                <p className="font-normal">F</p>
              </th> */}
            </>
          )}

          <th className="w-[50px]" >
            <div
              onClick={() => handleShowCalculator()}
              className="px-2 py-2  bg-slate-400 rounded-l-lg m-0 cursor-pointer hover:bg-slate-300 active:bg-slate-500"
            >
              {showCalculator ? <MdClose /> : <MdCalculate />}
            </div>
          </th>
        </tr>
        {/* initiator */}
        <ArbSlice {...initiator} isInitiator total={total} amountDist={initiatorAmountDist} setOdds={(e: any) => setInitiatorOdds(e.target.value)} odds={initiatorOdds} subscribed={subscribed} showCalculator={showCalculator} />
        {/* regular */}
        <ArbSlice {...regular} total={total} amountDist={regularAmountDist} setOdds={(e: any) => setRegularOdds(e.target.value)} odds={regularOdds} subscribed={subscribed} showCalculator={showCalculator} />
        {/* extra details */}
        <tr>
          <td className="text-slate-500 cursor-pointer hover:text-slate-300 active:text-slate-500">
            {generateLink()}
          </td>
          {showCalculator && (
            <>
              <td></td>
              <td>
                {/* <MdOutlineLaunch /> */}
              </td>
              {/* xxxx */}
              <td></td>
              <td className="py-2">
                <div className="w-full flex items-center space-x-2 px-2">
                  {/* <MdAutorenew className="text-[32px] relative top-2.5" /> */}
                  <Input label="amount" value={amount} onChange={(e: any) => setAmount(e.target.value)} />
                </div>
              </td>
              {/* <td className="py-2">
                <div className="w-full px-2">
                  <p className="text-center">NGN</p>
                </div>
              </td> */}
              {/* <td></td>
              <td>
                <div className="w-full flex justify-center items-center">
                  <input type="radio" />
                </div>
              </td> */}
              <td>
                {/* <div className="px-3 py-2 text-white rounded-lg bg-slate-500 cursor-pointer hover:bg-slate-300 active:bg-slate-500">
                  =
                </div> */}
              </td>
            </>
          )}
        </tr>
      </table>
    </div>
  )
}

interface IArbSliceProps extends ArbInit {
  odds: number
  showCalculator: boolean;
  subscribed: boolean;
  amountDist: number;
  total: number;
  isInitiator?: boolean;
  setOdds: (key: any) => void;
}

const ArbSlice: FC<IArbSliceProps> = ({ isInitiator, amountDist, showCalculator, subscribed, bookmaker, link, name, odds, setOdds, total, odds_type, league }) => {

  const navigate = useNavigate();

  const handleShowInfo = () => {
    // console.log("subscribed arbSlice")
    // console.log(subscribed)
    return <td className="py-2">
      <div className="flex justify-center items-center space-x-2">

        {isInitiator && <div className="relative">
          <div className="peer w-[7px] h-[7px] rounded-full bg-black cursor-pointer" />
          <div className="peer-hover:block hidden px-3 py-2 rounded-md rounded-tr-none pointer-events-none absolute top-2 right-3 bg-primary text-white">initiator</div>
        </div>}
        {
          subscribed ?
            <>
              {showCalculator ?
                <div className="w-full px-2">
                  <Input type="number" value={odds} onChange={setOdds} />
                </div>
                : <p className="text-center">{odds}</p>
              }
            </>

            : <p className="text-center">XX</p>
        }
      </div>
    </td>
  }

  const handleShowOdds = () => {
    if (subscribed) {
      return <td className="py-2 text-center">{odds_type}</td>
    } else {
      return <td className="py-2 text-center">XXXX</td>
    }
  }

  const generateLink = () => {
    const handleGo = () => {
      if (subscribed) {
        const parsingLink = link.split("=").at(-1);
        if (!parsingLink) return;
        const parsedLink = decodeURIComponent(parsingLink);
        // const url = `https://breaking-bet.com${parsedLink}`
        window.open(parsedLink, "_blank");
      } else {
        navigate("/pricing")
      }
    }
    return (
      <div onClick={handleGo} className=" cursor-pointer">
        <p className="underline font-semibold" >{name}</p>
        <p>{league}</p>
      </div>
    )
  }

  return (
    <tr className="border-b border-slate-200">
      <td className="py-2 pl-2">
        <p className="font-medium capitalize">{bookmaker}</p>
      </td>
      <td className="py-2">

        {generateLink()}
      </td>
      {/* show xxxx's for unpaid */}
      {handleShowOdds()}

      {
        handleShowInfo()
      }
      {showCalculator && (
        <>
          {/* <td className="py-2">
            <div className="w-full px-2">
              <Input />
            </div>
          </td> */}
          <td className="py-2">
            {/* <div className="w-full flex items-center space-x-2 px-2"> */}
            {/* <MdAutorenew className="text-[32px] relative top-2.5" /> */}
            {/* <Input value={amountDist} /> */}

            {/* </div> */}
            {subscribed ?
              <p className="text-center">₦{numberWithCommas(amountDist)}</p>
              :
              <p className="text-center">₦XX</p>
            }
          </td>
          {/* <td className="py-2">
            <div className="w-full px-2">
              <p className="text-center">NGN</p>
            </div>
          </td> */}
          <td className="py-2">
            <div className="w-full px-2">
              {
                subscribed ?
                  <p className="text-center">₦{numberWithCommas(round(total, 2))}</p>
                  :
                  <p className="text-center">₦XX</p>
              }
            </div>
          </td>
          {/* <td>
            <div className="w-full flex justify-center items-center">
              <input type="checkbox" />
            </div>
          </td>
          <td>
            <div className="w-full flex justify-center items-center">
              <input type="radio" />
            </div>
          </td> */}
        </>
      )}

    </tr>
  )
}

export default Arb;