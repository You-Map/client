import styled from 'styled-components';

const Logo = ({ width = '90px', color = '#000' }) => {
  return (
    <LogoContainer width={width}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 90 30"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M5.72 24V17.02L5.86 18L0.2 10H2.8L7.12 16.2L6.62 16.14L10.52 10H13L7.58 18.22L7.88 16.86V24H5.72ZM38.5406 24.12C37.4606 24.12 36.494 23.8867 35.6406 23.42C34.7873 22.94 34.114 22.2867 33.6206 21.46C33.1406 20.62 32.9006 19.6733 32.9006 18.62V9.98H35.0606V18.44C35.0606 19.12 35.2206 19.7333 35.5406 20.28C35.8606 20.8133 36.2806 21.24 36.8006 21.56C37.334 21.88 37.914 22.04 38.5406 22.04C39.2073 22.04 39.8073 21.88 40.3406 21.56C40.8873 21.24 41.3206 20.8133 41.6406 20.28C41.9606 19.7333 42.1206 19.12 42.1206 18.44V9.98H44.1806V18.62C44.1806 19.6733 43.934 20.62 43.4406 21.46C42.9606 22.2867 42.294 22.94 41.4406 23.42C40.5873 23.8867 39.6206 24.12 38.5406 24.12ZM47.9053 24V10H50.0253L55.1253 18.3L54.1053 18.28L59.2653 10H61.2653V24H59.1053V18.26C59.1053 17.06 59.132 15.98 59.1853 15.02C59.252 14.06 59.3586 13.1067 59.5053 12.16L59.7853 12.9L55.2053 19.98H53.8853L49.4453 12.98L49.6653 12.16C49.812 13.0533 49.912 13.9733 49.9653 14.92C50.032 15.8533 50.0653 16.9667 50.0653 18.26V24H47.9053ZM63.7305 24L69.1505 10H71.3505L76.7305 24H74.4305L71.2305 15.56C71.1905 15.4667 71.1105 15.24 70.9905 14.88C70.8838 14.52 70.7571 14.12 70.6105 13.68C70.4638 13.24 70.3305 12.84 70.2105 12.48C70.0905 12.1067 70.0105 11.8667 69.9705 11.76L70.4305 11.74C70.3505 11.9667 70.2505 12.2533 70.1305 12.6C70.0238 12.9467 69.9038 13.3133 69.7705 13.7C69.6505 14.0867 69.5305 14.4533 69.4105 14.8C69.2905 15.1333 69.1905 15.4133 69.1105 15.64L65.9305 24H63.7305ZM66.1305 20.52L66.9305 18.44H73.2905L74.2105 20.52H66.1305ZM79.1944 24V10H84.8944C85.6544 10 86.341 10.1933 86.9544 10.58C87.581 10.9533 88.081 11.4667 88.4544 12.12C88.8277 12.7733 89.0144 13.5 89.0144 14.3C89.0144 15.1 88.8277 15.8267 88.4544 16.48C88.081 17.1333 87.581 17.66 86.9544 18.06C86.341 18.4467 85.6544 18.64 84.8944 18.64H81.3544V24H79.1944ZM81.3544 16.56H84.8544C85.2144 16.56 85.541 16.46 85.8344 16.26C86.1277 16.0467 86.361 15.7733 86.5344 15.44C86.721 15.0933 86.8144 14.7133 86.8144 14.3C86.8144 13.8867 86.721 13.5133 86.5344 13.18C86.361 12.8467 86.1277 12.58 85.8344 12.38C85.541 12.18 85.2144 12.08 84.8544 12.08H81.3544V16.56Z" />
        <path d="M22 12.6875C21.3201 12.6875 20.6555 12.8891 20.0902 13.2668C19.5249 13.6445 19.0843 14.1814 18.8242 14.8095C18.564 15.4376 18.4959 16.1288 18.6286 16.7956C18.7612 17.4624 19.0886 18.0749 19.5693 18.5557C20.0501 19.0364 20.6626 19.3638 21.3294 19.4964C21.9962 19.6291 22.6874 19.561 23.3155 19.3008C23.9436 19.0407 24.4805 18.6001 24.8582 18.0348C25.2359 17.4695 25.4375 16.8049 25.4375 16.125C25.4365 15.2136 25.074 14.3399 24.4295 13.6955C23.7851 13.051 22.9114 12.6885 22 12.6875ZM22 17.6875C21.691 17.6875 21.3889 17.5959 21.1319 17.4242C20.875 17.2525 20.6747 17.0085 20.5564 16.7229C20.4382 16.4374 20.4072 16.1233 20.4675 15.8202C20.5278 15.5171 20.6766 15.2387 20.8951 15.0201C21.1137 14.8016 21.3921 14.6528 21.6952 14.5925C21.9983 14.5322 22.3124 14.5632 22.5979 14.6814C22.8835 14.7997 23.1275 15 23.2992 15.2569C23.4709 15.5139 23.5625 15.816 23.5625 16.125C23.5625 16.5394 23.3979 16.9368 23.1049 17.2299C22.8118 17.5229 22.4144 17.6875 22 17.6875ZM22 8.9375C20.0944 8.93957 18.2674 9.69748 16.92 11.045C15.5725 12.3924 14.8146 14.2194 14.8125 16.125C14.8125 22.1687 21.1906 26.7031 21.4625 26.893C21.6201 27.0032 21.8077 27.0624 22 27.0624C22.1923 27.0624 22.3799 27.0032 22.5375 26.893C23.7455 26.0027 24.8508 24.9808 25.8328 23.8461C28.0273 21.3258 29.1875 18.6539 29.1875 16.125C29.1854 14.2194 28.4275 12.3924 27.08 11.045C25.7326 9.69748 23.9056 8.93957 22 8.9375ZM24.4453 22.5867C23.7004 23.4424 22.8822 24.2313 22 24.9445C21.1178 24.2313 20.2996 23.4424 19.5547 22.5867C18.25 21.0758 16.6875 18.7273 16.6875 16.125C16.6875 14.716 17.2472 13.3648 18.2435 12.3685C19.2398 11.3722 20.591 10.8125 22 10.8125C23.409 10.8125 24.7602 11.3722 25.7565 12.3685C26.7528 13.3648 27.3125 14.716 27.3125 16.125C27.3125 18.7273 25.75 21.0758 24.4453 22.5867Z" />
      </svg>
    </LogoContainer>
  );
};

const LogoContainer = styled.div`
  width: ${({ width }) => width};
  height: auto;
  margin: 0 auto;
`;

export default Logo;
