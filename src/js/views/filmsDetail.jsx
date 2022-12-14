import React, {useState, useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import CardDetail from "../component/cardDetail.jsx";

import { Context } from "../store/appContext.jsx";
export const FilmsDetail = () => {
	const {store, actions} = useContext(Context);
	const [data, setData] = useState ({})
	const {filmsid}=useParams();
	useEffect(()=>{
				actions.getStarWarsDetail("films", filmsid).then(resp=>setData(resp))
	},[] )
	return (
		<div className="container flex-row">
		<h1>Films {data.name}</h1>
		<CardDetail
		title={data.name}
		img={`https://starwars-visualguide.com/assets/img/films/${filmsid}.jpg`}
		body={
			<ul>
<li>Title: {data.title}</li>
<li>Director: {data.director} </li>
<li>Episode_id{data.episode_id} </li>
<li>Release date: {data.release_date}</li>
<li>Edited {data.edited}</li>
			</ul>
		}
		type="film"
		/>
		</div>
	);
};
