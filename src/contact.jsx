import { memo, useRef } from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";

const Contact = () => {
  const Ref = useRef(YMaps);
  return (
    <div className="main">
      <Ref.current>
        <Map height='400px' width="600px"
          defaultState={{
            center: [43.32476037658909, 45.69243289233391],
            zoom: 16,
          }}
        >
          <Placemark geometry={[43.32476037658909, 45.69243289233391]} />
        </Map>
      </Ref.current>
    </div>
  );
};

export default memo(Contact, () => false);
