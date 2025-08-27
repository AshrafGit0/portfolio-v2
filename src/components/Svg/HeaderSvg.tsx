// header name svg

type HeaderSvg = {
  height: number;
  width: number;
};

const HeaderSvg = ({ height = 50, width = 40 }: HeaderSvg) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 406 368"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(262,83%,58%)" />
          <stop offset="100%" stopColor="hsl(285,100%,80%)" />
        </linearGradient>
      </defs>
      <path
        d="M314.516 203.174L314.516 349.104L162.117 208.727M314.516 203.174L282.653 203.26M314.516 203.174L337.498 203.26L380.617 170.782L314.516 170.782M162.117 208.727L117.661 170.634L157.117 170.782M162.117 208.727L65.1165 301.139L20.176 301.139L137.099 188.83M200.117 170.782L282.653 96.1739L282.653 170.782M200.117 170.782L282.653 170.782M200.117 170.782L157.117 170.782M282.653 203.26L210.462 202.796L282.653 270.76L282.653 203.26ZM282.653 170.782L314.516 170.782M157.117 170.782L315.751 20.1061L314.516 170.782"
        stroke="url(#textGradient)"
        strokeWidth="10"
      />
    </svg>
  );
};
export default HeaderSvg;
