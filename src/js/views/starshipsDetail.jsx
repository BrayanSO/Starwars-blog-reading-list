import React, {useState, useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import CardDetail from "../component/cardDetail.jsx";

import { Context } from "../store/appContext.jsx";
export const StarshipsDetail = () => {
	const {store, actions} = useContext(Context);
	const [data, setData] = useState ({})
	const {starshipsid}=useParams();
	useEffect(()=>{
				actions.getStarWarsDetail("starships", starshipsid).then(resp=>setData(resp))
	},[] )
	return (
		<div className="container flex-row">
		<h1>starships {data.name}</h1>
		<CardDetail
		title={data.name}
		img={`https://starwars-visualguide.com/assets/img/starships/${starshipsid}.jpg`}
		body={
			<ul>
<li>cargo_capacity{data.cargo_capacity}</li>
<li>consumables{data.consumables}</li>
<li>cost_in_credits{data.cost_in_credits}</li>
<li>created{data.created}</li>
<li>crew{data.crew}</li>
<li>hyperdrive_rating:{data.hyperdrive_rating}</li>
<li>length{data.length}</li>
<li>manufacturer{data.manufacturer}</li>
			</ul>
		}
		type="starships"
		/>
		</div>
	);
};
