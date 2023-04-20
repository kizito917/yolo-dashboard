export default function ActivityList() {
    return (
        <div className="mt-4 bg-default rounded-md px-4">
            <div className="flex justify-between pt-4">
                <div>
                    <h4 className="text-md font-bold mb-2">Activities</h4>
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="4" viewBox="0 0 48 4" fill="none">
                        <path d="M0 2H48" stroke="#1565D8" strokeWidth="3"></path>
                    </svg>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                        <rect y="0.494141" width="24" height="24" rx="4" fill="#8692A6" fillOpacity="0.1"></rect>
                        <path fillRule="evenodd" clipRule="evenodd" d="M12.0007 19.0005C12.734 19.0005 13.334 18.4005 13.334 17.6672H10.6674C10.6674 18.4005 11.2607 19.0005 12.0007 19.0005ZM16.0005 15V11.6667C16.0005 9.62 14.9072 7.90667 13.0005 7.45333V7C13.0005 6.44667 12.5538 6 12.0005 6C11.4472 6 11.0005 6.44667 11.0005 7V7.45333C9.08718 7.90667 8.00051 9.61333 8.00051 11.6667V15L6.66718 16.3333V17H17.3338V16.3333L16.0005 15Z" fill="#1565D8"></path>
                        <path fillRule="evenodd" clipRule="evenodd" d="M16.6667 11.9997C18.1394 11.9997 19.3333 10.8058 19.3333 9.33305C19.3333 7.86029 18.1394 6.66638 16.6667 6.66638C15.1939 6.66638 14 7.86029 14 9.33305C14 10.8058 15.1939 11.9997 16.6667 11.9997Z" fill="#FF8080" stroke="white" strokeWidth="1.2"></path>
                    </svg>
                </div>
            </div>
            <div className="pt-4" style={{ height: '45vh', overflowX: 'hidden', overflowY: 'auto'}}>
                <div className="flex gap-4 pt-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="41" viewBox="0 0 40 41" fill="none">
                        <path d="M0 11.5095C0 7.69486 0 5.78755 0.730584 4.32542C1.40116 2.98339 2.48925 1.8953 3.83128 1.22473C5.29341 0.494141 7.20073 0.494141 11.0154 0.494141H28.9846C32.7993 0.494141 34.7066 0.494141 36.1687 1.22473C37.5107 1.8953 38.5988 2.98339 39.2694 4.32542C40 5.78755 40 7.69487 40 11.5095V29.4788C40 33.2934 40 35.2007 39.2694 36.6629C38.5988 38.0049 37.5107 39.093 36.1687 39.7636C34.7066 40.4941 32.7993 40.4941 28.9846 40.4941H11.0154C7.20072 40.4941 5.29341 40.4941 3.83128 39.7636C2.48925 39.093 1.40116 38.0049 0.730584 36.6629C0 35.2007 0 33.2934 0 29.4788V11.5095Z" fill="#E9FFF4"></path>
                        <path d="M28.0297 15.2582L22.9859 10.2145C22.8453 10.0738 22.6555 9.99414 22.4562 9.99414H12.5C12.0852 9.99414 11.75 10.3293 11.75 10.7441V30.2441C11.75 30.659 12.0852 30.9941 12.5 30.9941H27.5C27.9148 30.9941 28.25 30.659 28.25 30.2441V15.7902C28.25 15.591 28.1703 15.3988 28.0297 15.2582ZM26.5203 16.1348H22.1094V11.7238L26.5203 16.1348ZM26.5625 29.3066H13.4375V11.6816H20.5156V16.7441C20.5156 17.0052 20.6193 17.2556 20.8039 17.4402C20.9885 17.6248 21.2389 17.7285 21.5 17.7285H26.5625V29.3066ZM19.8125 22.9785H15.5C15.3969 22.9785 15.3125 23.0629 15.3125 23.166V24.291C15.3125 24.3941 15.3969 24.4785 15.5 24.4785H19.8125C19.9156 24.4785 20 24.3941 20 24.291V23.166C20 23.0629 19.9156 22.9785 19.8125 22.9785ZM15.3125 19.9785V21.1035C15.3125 21.2066 15.3969 21.291 15.5 21.291H24.5C24.6031 21.291 24.6875 21.2066 24.6875 21.1035V19.9785C24.6875 19.8754 24.6031 19.791 24.5 19.791H15.5C15.3969 19.791 15.3125 19.8754 15.3125 19.9785Z" fill="#45DB91"></path>
                    </svg>
                    <h6 className="text-sm pt-2">There are 3 new ready reports for Tosin Odubela</h6>
                </div>
                <div className="flex gap-4 pt-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="41" viewBox="0 0 40 41" fill="none">
                        <path d="M0 11.5095C0 7.69483 0 5.78752 0.730584 4.32539C1.40116 2.98336 2.48925 1.89527 3.83128 1.22469C5.29341 0.49411 7.20073 0.49411 11.0154 0.49411H28.9846C32.7993 0.49411 34.7066 0.49411 36.1687 1.22469C37.5107 1.89527 38.5988 2.98336 39.2694 4.32539C40 5.78752 40 7.69484 40 11.5095V29.4788C40 33.2934 40 35.2007 39.2694 36.6628C38.5988 38.0049 37.5107 39.093 36.1687 39.7635C34.7066 40.4941 32.7993 40.4941 28.9846 40.4941H11.0154C7.20072 40.4941 5.29341 40.4941 3.83128 39.7635C2.48925 39.093 1.40116 38.0049 0.730584 36.6628C0 35.2007 0 33.2934 0 29.4787V11.5095Z" fill="#00CFDE" fillOpacity="0.1"></path>
                        <g clipPath="url(#clip0_1_536)">
                            <path d="M20.1249 8.49411C13.4291 8.49411 8 13.9232 8 20.619C8 27.3147 13.4291 32.7439 20.1249 32.7439C26.8206 32.7439 32.2498 27.3147 32.2498 20.619C32.2498 13.9232 26.8206 8.49411 20.1249 8.49411ZM20.1249 30.687C14.5658 30.687 10.0569 26.178 10.0569 20.619C10.0569 15.06 14.5658 10.551 20.1249 10.551C25.6839 10.551 30.1929 15.06 30.1929 20.619C30.1929 26.178 25.6839 30.687 20.1249 30.687Z" fill="#00CFDE"></path>
                            <path d="M19 15.7932C19 16.1377 19.1369 16.4682 19.3805 16.7118C19.6241 16.9554 19.9546 17.0923 20.2991 17.0923C20.6436 17.0923 20.9741 16.9554 21.2177 16.7118C21.4613 16.4682 21.5982 16.1377 21.5982 15.7932C21.5982 15.4487 21.4613 15.1182 21.2177 14.8746C20.9741 14.631 20.6436 14.4941 20.2991 14.4941C19.9546 14.4941 19.6241 14.631 19.3805 14.8746C19.1369 15.1182 19 15.4487 19 15.7932ZM20.9486 18.8244H19.6495C19.5305 18.8244 19.433 18.9219 19.433 19.0409V26.4025C19.433 26.5216 19.5305 26.619 19.6495 26.619H20.9486C21.0677 26.619 21.1652 26.5216 21.1652 26.4025V19.0409C21.1652 18.9219 21.0677 18.8244 20.9486 18.8244Z" fill="#00CFDE"></path>
                        </g>
                        <defs>
                            <clipPath id="clip0_1_536">
                                <rect width="24" height="24" fill="white" transform="translate(8 8.49414)"></rect>
                            </clipPath>
                        </defs>
                    </svg>
                    <h6 className="text-sm pt-2">You have scheduled an interview with Michael Okoh</h6>
                </div>
                <div className="flex gap-4 pt-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="41" viewBox="0 0 40 41" fill="none">
                        <path d="M0 11.5095C0 7.69486 0 5.78755 0.730584 4.32542C1.40116 2.98339 2.48925 1.8953 3.83128 1.22473C5.29341 0.494141 7.20073 0.494141 11.0154 0.494141H28.9846C32.7993 0.494141 34.7066 0.494141 36.1687 1.22473C37.5107 1.8953 38.5988 2.98339 39.2694 4.32542C40 5.78755 40 7.69487 40 11.5095V29.4788C40 33.2934 40 35.2007 39.2694 36.6629C38.5988 38.0049 37.5107 39.093 36.1687 39.7636C34.7066 40.4941 32.7993 40.4941 28.9846 40.4941H11.0154C7.20072 40.4941 5.29341 40.4941 3.83128 39.7636C2.48925 39.093 1.40116 38.0049 0.730584 36.6629C0 35.2007 0 33.2934 0 29.4788V11.5095Z" fill="#FFF9EA"></path>
                        <g clipPath="url(#clip0_1_544)">
                            <path d="M27.9607 10.4236H25.6512V9.26883C25.6512 8.96257 25.5296 8.66885 25.313 8.45229C25.0964 8.23574 24.8027 8.11407 24.4965 8.11407C24.1902 8.11407 23.8965 8.23574 23.6799 8.45229C23.4634 8.66885 23.3417 8.96257 23.3417 9.26883V10.4236H16.4132V9.26883C16.4132 8.96257 16.2915 8.66885 16.075 8.45229C15.8584 8.23574 15.5647 8.11407 15.2585 8.11407C14.9522 8.11407 14.6585 8.23574 14.4419 8.45229C14.2254 8.66885 14.1037 8.96257 14.1037 9.26883V10.4236H11.7942C10.8754 10.4236 9.99429 10.7886 9.34461 11.4382C8.69494 12.0879 8.32996 12.9691 8.32996 13.8878V27.7448C8.32996 28.6636 8.69494 29.5448 9.34461 30.1944C9.99429 30.8441 10.8754 31.2091 11.7942 31.2091H27.9607C28.8795 31.2091 29.7606 30.8441 30.4103 30.1944C31.06 29.5448 31.425 28.6636 31.425 27.7448V13.8878C31.425 12.9691 31.06 12.0879 30.4103 11.4382C29.7606 10.7886 28.8795 10.4236 27.9607 10.4236ZM29.1155 27.7448C29.1155 28.0511 28.9938 28.3448 28.7773 28.5614C28.5607 28.7779 28.267 28.8996 27.9607 28.8996H11.7942C11.4879 28.8996 11.1942 28.7779 10.9777 28.5614C10.7611 28.3448 10.6395 28.0511 10.6395 27.7448V19.6616H29.1155V27.7448ZM29.1155 17.3521H10.6395V13.8878C10.6395 13.5816 10.7611 13.2879 10.9777 13.0713C11.1942 12.8547 11.4879 12.7331 11.7942 12.7331H14.1037V13.8878C14.1037 14.1941 14.2254 14.4878 14.4419 14.7044C14.6585 14.9209 14.9522 15.0426 15.2585 15.0426C15.5647 15.0426 15.8584 14.9209 16.075 14.7044C16.2915 14.4878 16.4132 14.1941 16.4132 13.8878V12.7331H23.3417V13.8878C23.3417 14.1941 23.4634 14.4878 23.6799 14.7044C23.8965 14.9209 24.1902 15.0426 24.4965 15.0426C24.8027 15.0426 25.0964 14.9209 25.313 14.7044C25.5296 14.4878 25.6512 14.1941 25.6512 13.8878V12.7331H27.9607C28.267 12.7331 28.5607 12.8547 28.7773 13.0713C28.9938 13.2879 29.1155 13.5816 29.1155 13.8878V17.3521Z" fill="#FDB557"></path>
                        </g>
                        <defs>
                            <clipPath id="clip0_1_544">
                                <rect width="24" height="24" fill="white" transform="translate(8 8.49414)"></rect>
                            </clipPath>
                        </defs>
                    </svg>
                    <h6 className="text-sm pt-2">You have scheduled 3 appointment for 24th April, 2023</h6>
                </div>
                <div className="flex gap-4 pt-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="41" viewBox="0 0 40 41" fill="none">
                        <path d="M0 11.5095C0 7.69486 0 5.78755 0.730584 4.32542C1.40116 2.98339 2.48925 1.8953 3.83128 1.22473C5.29341 0.494141 7.20073 0.494141 11.0154 0.494141H28.9846C32.7993 0.494141 34.7066 0.494141 36.1687 1.22473C37.5107 1.8953 38.5988 2.98339 39.2694 4.32542C40 5.78755 40 7.69487 40 11.5095V29.4788C40 33.2934 40 35.2007 39.2694 36.6629C38.5988 38.0049 37.5107 39.093 36.1687 39.7636C34.7066 40.4941 32.7993 40.4941 28.9846 40.4941H11.0154C7.20072 40.4941 5.29341 40.4941 3.83128 39.7636C2.48925 39.093 1.40116 38.0049 0.730584 36.6629C0 35.2007 0 33.2934 0 29.4788V11.5095Z" fill="#E9FFF4"></path>
                        <path d="M28.0297 15.2582L22.9859 10.2145C22.8453 10.0738 22.6555 9.99414 22.4562 9.99414H12.5C12.0852 9.99414 11.75 10.3293 11.75 10.7441V30.2441C11.75 30.659 12.0852 30.9941 12.5 30.9941H27.5C27.9148 30.9941 28.25 30.659 28.25 30.2441V15.7902C28.25 15.591 28.1703 15.3988 28.0297 15.2582ZM26.5203 16.1348H22.1094V11.7238L26.5203 16.1348ZM26.5625 29.3066H13.4375V11.6816H20.5156V16.7441C20.5156 17.0052 20.6193 17.2556 20.8039 17.4402C20.9885 17.6248 21.2389 17.7285 21.5 17.7285H26.5625V29.3066ZM19.8125 22.9785H15.5C15.3969 22.9785 15.3125 23.0629 15.3125 23.166V24.291C15.3125 24.3941 15.3969 24.4785 15.5 24.4785H19.8125C19.9156 24.4785 20 24.3941 20 24.291V23.166C20 23.0629 19.9156 22.9785 19.8125 22.9785ZM15.3125 19.9785V21.1035C15.3125 21.2066 15.3969 21.291 15.5 21.291H24.5C24.6031 21.291 24.6875 21.2066 24.6875 21.1035V19.9785C24.6875 19.8754 24.6031 19.791 24.5 19.791H15.5C15.3969 19.791 15.3125 19.8754 15.3125 19.9785Z" fill="#45DB91"></path>
                    </svg>
                    <h6 className="text-sm pt-2">Okereke Chinaza has rescheduled appointment</h6>
                </div>
                <div className="flex gap-4 pt-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="41" viewBox="0 0 40 41" fill="none">
                        <path d="M0 11.5095C0 7.69486 0 5.78755 0.730584 4.32542C1.40116 2.98339 2.48925 1.8953 3.83128 1.22473C5.29341 0.494141 7.20073 0.494141 11.0154 0.494141H28.9846C32.7993 0.494141 34.7066 0.494141 36.1687 1.22473C37.5107 1.8953 38.5988 2.98339 39.2694 4.32542C40 5.78755 40 7.69487 40 11.5095V29.4788C40 33.2934 40 35.2007 39.2694 36.6629C38.5988 38.0049 37.5107 39.093 36.1687 39.7636C34.7066 40.4941 32.7993 40.4941 28.9846 40.4941H11.0154C7.20072 40.4941 5.29341 40.4941 3.83128 39.7636C2.48925 39.093 1.40116 38.0049 0.730584 36.6629C0 35.2007 0 33.2934 0 29.4788V11.5095Z" fill="#E9FFF4"></path>
                        <path d="M28.0297 15.2582L22.9859 10.2145C22.8453 10.0738 22.6555 9.99414 22.4562 9.99414H12.5C12.0852 9.99414 11.75 10.3293 11.75 10.7441V30.2441C11.75 30.659 12.0852 30.9941 12.5 30.9941H27.5C27.9148 30.9941 28.25 30.659 28.25 30.2441V15.7902C28.25 15.591 28.1703 15.3988 28.0297 15.2582ZM26.5203 16.1348H22.1094V11.7238L26.5203 16.1348ZM26.5625 29.3066H13.4375V11.6816H20.5156V16.7441C20.5156 17.0052 20.6193 17.2556 20.8039 17.4402C20.9885 17.6248 21.2389 17.7285 21.5 17.7285H26.5625V29.3066ZM19.8125 22.9785H15.5C15.3969 22.9785 15.3125 23.0629 15.3125 23.166V24.291C15.3125 24.3941 15.3969 24.4785 15.5 24.4785H19.8125C19.9156 24.4785 20 24.3941 20 24.291V23.166C20 23.0629 19.9156 22.9785 19.8125 22.9785ZM15.3125 19.9785V21.1035C15.3125 21.2066 15.3969 21.291 15.5 21.291H24.5C24.6031 21.291 24.6875 21.2066 24.6875 21.1035V19.9785C24.6875 19.8754 24.6031 19.791 24.5 19.791H15.5C15.3969 19.791 15.3125 19.8754 15.3125 19.9785Z" fill="#45DB91"></path>
                    </svg>
                    <h6 className="text-sm pt-2">There are 3 new ready reports for Chinaza Okereke</h6>
                </div>
                <div className="flex gap-4 pt-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="41" viewBox="0 0 40 41" fill="none">
                        <path d="M0 11.5095C0 7.69486 0 5.78755 0.730584 4.32542C1.40116 2.98339 2.48925 1.8953 3.83128 1.22473C5.29341 0.494141 7.20073 0.494141 11.0154 0.494141H28.9846C32.7993 0.494141 34.7066 0.494141 36.1687 1.22473C37.5107 1.8953 38.5988 2.98339 39.2694 4.32542C40 5.78755 40 7.69487 40 11.5095V29.4788C40 33.2934 40 35.2007 39.2694 36.6629C38.5988 38.0049 37.5107 39.093 36.1687 39.7636C34.7066 40.4941 32.7993 40.4941 28.9846 40.4941H11.0154C7.20072 40.4941 5.29341 40.4941 3.83128 39.7636C2.48925 39.093 1.40116 38.0049 0.730584 36.6629C0 35.2007 0 33.2934 0 29.4788V11.5095Z" fill="#E9FFF4"></path>
                        <path d="M28.0297 15.2582L22.9859 10.2145C22.8453 10.0738 22.6555 9.99414 22.4562 9.99414H12.5C12.0852 9.99414 11.75 10.3293 11.75 10.7441V30.2441C11.75 30.659 12.0852 30.9941 12.5 30.9941H27.5C27.9148 30.9941 28.25 30.659 28.25 30.2441V15.7902C28.25 15.591 28.1703 15.3988 28.0297 15.2582ZM26.5203 16.1348H22.1094V11.7238L26.5203 16.1348ZM26.5625 29.3066H13.4375V11.6816H20.5156V16.7441C20.5156 17.0052 20.6193 17.2556 20.8039 17.4402C20.9885 17.6248 21.2389 17.7285 21.5 17.7285H26.5625V29.3066ZM19.8125 22.9785H15.5C15.3969 22.9785 15.3125 23.0629 15.3125 23.166V24.291C15.3125 24.3941 15.3969 24.4785 15.5 24.4785H19.8125C19.9156 24.4785 20 24.3941 20 24.291V23.166C20 23.0629 19.9156 22.9785 19.8125 22.9785ZM15.3125 19.9785V21.1035C15.3125 21.2066 15.3969 21.291 15.5 21.291H24.5C24.6031 21.291 24.6875 21.2066 24.6875 21.1035V19.9785C24.6875 19.8754 24.6031 19.791 24.5 19.791H15.5C15.3969 19.791 15.3125 19.8754 15.3125 19.9785Z" fill="#45DB91"></path>
                    </svg>
                    <h6 className="text-sm pt-2">There are 3 new ready reports for Tosin Odubela</h6>
                </div>
                <div className="flex gap-4 pt-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="41" viewBox="0 0 40 41" fill="none">
                        <path d="M0 11.5095C0 7.69486 0 5.78755 0.730584 4.32542C1.40116 2.98339 2.48925 1.8953 3.83128 1.22473C5.29341 0.494141 7.20073 0.494141 11.0154 0.494141H28.9846C32.7993 0.494141 34.7066 0.494141 36.1687 1.22473C37.5107 1.8953 38.5988 2.98339 39.2694 4.32542C40 5.78755 40 7.69487 40 11.5095V29.4788C40 33.2934 40 35.2007 39.2694 36.6629C38.5988 38.0049 37.5107 39.093 36.1687 39.7636C34.7066 40.4941 32.7993 40.4941 28.9846 40.4941H11.0154C7.20072 40.4941 5.29341 40.4941 3.83128 39.7636C2.48925 39.093 1.40116 38.0049 0.730584 36.6629C0 35.2007 0 33.2934 0 29.4788V11.5095Z" fill="#FFF9EA"></path>
                        <g clipPath="url(#clip0_1_544)">
                            <path d="M27.9607 10.4236H25.6512V9.26883C25.6512 8.96257 25.5296 8.66885 25.313 8.45229C25.0964 8.23574 24.8027 8.11407 24.4965 8.11407C24.1902 8.11407 23.8965 8.23574 23.6799 8.45229C23.4634 8.66885 23.3417 8.96257 23.3417 9.26883V10.4236H16.4132V9.26883C16.4132 8.96257 16.2915 8.66885 16.075 8.45229C15.8584 8.23574 15.5647 8.11407 15.2585 8.11407C14.9522 8.11407 14.6585 8.23574 14.4419 8.45229C14.2254 8.66885 14.1037 8.96257 14.1037 9.26883V10.4236H11.7942C10.8754 10.4236 9.99429 10.7886 9.34461 11.4382C8.69494 12.0879 8.32996 12.9691 8.32996 13.8878V27.7448C8.32996 28.6636 8.69494 29.5448 9.34461 30.1944C9.99429 30.8441 10.8754 31.2091 11.7942 31.2091H27.9607C28.8795 31.2091 29.7606 30.8441 30.4103 30.1944C31.06 29.5448 31.425 28.6636 31.425 27.7448V13.8878C31.425 12.9691 31.06 12.0879 30.4103 11.4382C29.7606 10.7886 28.8795 10.4236 27.9607 10.4236ZM29.1155 27.7448C29.1155 28.0511 28.9938 28.3448 28.7773 28.5614C28.5607 28.7779 28.267 28.8996 27.9607 28.8996H11.7942C11.4879 28.8996 11.1942 28.7779 10.9777 28.5614C10.7611 28.3448 10.6395 28.0511 10.6395 27.7448V19.6616H29.1155V27.7448ZM29.1155 17.3521H10.6395V13.8878C10.6395 13.5816 10.7611 13.2879 10.9777 13.0713C11.1942 12.8547 11.4879 12.7331 11.7942 12.7331H14.1037V13.8878C14.1037 14.1941 14.2254 14.4878 14.4419 14.7044C14.6585 14.9209 14.9522 15.0426 15.2585 15.0426C15.5647 15.0426 15.8584 14.9209 16.075 14.7044C16.2915 14.4878 16.4132 14.1941 16.4132 13.8878V12.7331H23.3417V13.8878C23.3417 14.1941 23.4634 14.4878 23.6799 14.7044C23.8965 14.9209 24.1902 15.0426 24.4965 15.0426C24.8027 15.0426 25.0964 14.9209 25.313 14.7044C25.5296 14.4878 25.6512 14.1941 25.6512 13.8878V12.7331H27.9607C28.267 12.7331 28.5607 12.8547 28.7773 13.0713C28.9938 13.2879 29.1155 13.5816 29.1155 13.8878V17.3521Z" fill="#FDB557"></path>
                        </g>
                        <defs>
                            <clipPath id="clip0_1_544">
                                <rect width="24" height="24" fill="white" transform="translate(8 8.49414)"></rect>
                            </clipPath>
                        </defs>
                    </svg>
                    <h6 className="text-sm pt-2">You have scheduled 3 appointment for 24th April, 2023</h6>
                </div>
                <div className="flex gap-4 pt-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="41" viewBox="0 0 40 41" fill="none">
                        <path d="M0 11.5095C0 7.69486 0 5.78755 0.730584 4.32542C1.40116 2.98339 2.48925 1.8953 3.83128 1.22473C5.29341 0.494141 7.20073 0.494141 11.0154 0.494141H28.9846C32.7993 0.494141 34.7066 0.494141 36.1687 1.22473C37.5107 1.8953 38.5988 2.98339 39.2694 4.32542C40 5.78755 40 7.69487 40 11.5095V29.4788C40 33.2934 40 35.2007 39.2694 36.6629C38.5988 38.0049 37.5107 39.093 36.1687 39.7636C34.7066 40.4941 32.7993 40.4941 28.9846 40.4941H11.0154C7.20072 40.4941 5.29341 40.4941 3.83128 39.7636C2.48925 39.093 1.40116 38.0049 0.730584 36.6629C0 35.2007 0 33.2934 0 29.4788V11.5095Z" fill="#FFF9EA"></path>
                        <g clipPath="url(#clip0_1_544)">
                            <path d="M27.9607 10.4236H25.6512V9.26883C25.6512 8.96257 25.5296 8.66885 25.313 8.45229C25.0964 8.23574 24.8027 8.11407 24.4965 8.11407C24.1902 8.11407 23.8965 8.23574 23.6799 8.45229C23.4634 8.66885 23.3417 8.96257 23.3417 9.26883V10.4236H16.4132V9.26883C16.4132 8.96257 16.2915 8.66885 16.075 8.45229C15.8584 8.23574 15.5647 8.11407 15.2585 8.11407C14.9522 8.11407 14.6585 8.23574 14.4419 8.45229C14.2254 8.66885 14.1037 8.96257 14.1037 9.26883V10.4236H11.7942C10.8754 10.4236 9.99429 10.7886 9.34461 11.4382C8.69494 12.0879 8.32996 12.9691 8.32996 13.8878V27.7448C8.32996 28.6636 8.69494 29.5448 9.34461 30.1944C9.99429 30.8441 10.8754 31.2091 11.7942 31.2091H27.9607C28.8795 31.2091 29.7606 30.8441 30.4103 30.1944C31.06 29.5448 31.425 28.6636 31.425 27.7448V13.8878C31.425 12.9691 31.06 12.0879 30.4103 11.4382C29.7606 10.7886 28.8795 10.4236 27.9607 10.4236ZM29.1155 27.7448C29.1155 28.0511 28.9938 28.3448 28.7773 28.5614C28.5607 28.7779 28.267 28.8996 27.9607 28.8996H11.7942C11.4879 28.8996 11.1942 28.7779 10.9777 28.5614C10.7611 28.3448 10.6395 28.0511 10.6395 27.7448V19.6616H29.1155V27.7448ZM29.1155 17.3521H10.6395V13.8878C10.6395 13.5816 10.7611 13.2879 10.9777 13.0713C11.1942 12.8547 11.4879 12.7331 11.7942 12.7331H14.1037V13.8878C14.1037 14.1941 14.2254 14.4878 14.4419 14.7044C14.6585 14.9209 14.9522 15.0426 15.2585 15.0426C15.5647 15.0426 15.8584 14.9209 16.075 14.7044C16.2915 14.4878 16.4132 14.1941 16.4132 13.8878V12.7331H23.3417V13.8878C23.3417 14.1941 23.4634 14.4878 23.6799 14.7044C23.8965 14.9209 24.1902 15.0426 24.4965 15.0426C24.8027 15.0426 25.0964 14.9209 25.313 14.7044C25.5296 14.4878 25.6512 14.1941 25.6512 13.8878V12.7331H27.9607C28.267 12.7331 28.5607 12.8547 28.7773 13.0713C28.9938 13.2879 29.1155 13.5816 29.1155 13.8878V17.3521Z" fill="#FDB557"></path>
                        </g>
                        <defs>
                            <clipPath id="clip0_1_544">
                                <rect width="24" height="24" fill="white" transform="translate(8 8.49414)"></rect>
                            </clipPath>
                        </defs>
                    </svg>
                    <h6 className="text-sm pt-2">You have scheduled 3 appointment for 24th May, 2023</h6>
                </div>
            </div>
        </div>
    )
}
