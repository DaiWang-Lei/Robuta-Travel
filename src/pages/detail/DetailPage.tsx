import React, { FC } from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface MatchProps {
  touristRouteId: string;
}
export const DetailPage: FC<RouteComponentProps<MatchProps>> = (props) => {
  return (
    <div>
      当前旅游的路线为：{props.match.params.touristRouteId}
    </div>
  )
}

export default DetailPage;