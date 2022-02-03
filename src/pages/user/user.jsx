import "./user.css";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";
import PublishIcon from "@mui/icons-material/Publish";
import { Link } from "react-router-dom";

export default function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTo">
            <img
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFRYWFRYZGRYaFhgeGBoYHBoaGBwcHB4cGh0cGB0cITAlHCQrJRocJz0mKzYxNTU1GiU7QDs0Py40NTEBDAwMEA8QHxISHjEsJSs0PTQ0Nj00NDQxNj02NDQ0PTE0NDQ0NDQ0NDQ0NDY0NDQ0NDQ0MTQ0NDQ0NTQ0NDQ0NP/AABEIAMIBBAMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUCAwYBB//EAEUQAAIBAgQDBgMGAwUECwAAAAECAAMRBBIhMQVBUQYiMmFxgRORoUJSYnKCsRQzwSOSorLCFUNE0gc0VGODs9Hh4vDx/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAEDBAIF/8QAJxEBAQACAgEEAQQDAQAAAAAAAAECEQMxIQQSE0FxIjJRYYGx8EL/2gAMAwEAAhEDEQA/AKKIibHnwiIhJERAREQEREBERAREQEREBEjVsaig8zciw8tDryANxfyMrG4i7KxGl7hbDkOl9Trz02FrXleXLjj2tx4csuovIlK+KayqBZALb95rdSNfW1vWHxVQ2AOVegsNPLp85xfUYx3PS51dRKQ4ipcEtcDZbMR76gn3M34fiJzd9gOgUA39dSflJx58crpGXp88ZtaRNdLEK/hN/Y/1myXS76UWWdkREBERAREQEREBERAREQiEREJIiICIiAiIgIiICIiAldxPH5CqL4je+vhFj3j6HWTVrAsEBGpsWPhX1P8AQfSe43hCWZ2XNVRgtTMNMp8LoDsp99bi+hleeXjUW8ePneXTmxVRRYWPM3O53noxXmL+suAgGwHsBBQdB8hMvxf22/L/AEp1xOtjqem09/ir7AfOWFTBI32QOluXtt9J5/s9L3tysdd/6j2kfCn5lf8AxB//ACbPi32uLc97fLUTceGqPtc9NATc8uhv0tLUdnKqJ8V8O4pjVj3V9DlLZ0B0vpYXudNZzePXdT8m/pC4djyxCuyknY7Hy33/AH9ZaSuw1IK2UkkHw31U6aizXsdz6eksZt49+3y8/mk93iEREtVkREBERAREQEREBERIRCIiEkREBERA8ZgASdgNZWV8Rm1bbcKDYAbAued+mvkDa8k4x7kJ+pvQeEe5H+GdN2J4Arq2KxABuzfDXUKMujVD1YkEXPIX5zPzcntjTw8fu8uTThlYjMuH08gFPtdlb6Rh8UytkcFSNCGvmU8tSLkeZ156jWfUMuEc5UrJmO2Wop+QJ1lF2n4CWW9gXW5RraN1Q+o5dbGZcPU5TLzPDVlwY3Hw5xmABJNgNyZEeqX6qvyY+vQeW/7Ss4Zi2qeLZSQo6dCep5X8vWWLuFFybDzm2576ZMeP29vQOQ2nS8FwlTFhSvdCZkeqwurJzRV+2wPPZSOdypruz/BHxNTK6vTpKFZ2PdYhtkUbqTbc2IGvMGfR6tSlhqVzlSkigAAaAbKqqNSSbAAakmZuXm1+nHtpw49+agYHsthqYF6YqN96qBUJ9Ae6v6QJqxNLh+YoadBmU95Uph2U/iFNSV97Sm7TYjiDBagw+bDDV6Cuwrsv/eldQPwrfob6zCp29wy4Qfwi5a5ISnh8tirHQHKNCo8tzYaTPrK+d7W7xnhajszgq6l6JKi5Gam5IBG4KvcKRzFgZQ8d7LnDozitmULUazJ3u4jPuHA1CEbS67H8KfCHJVfPVq0zVZuebN/aJf7QGZDfqznnLDtgq/wtQkEkqyIF1YtW/sgFHM9/SJnlMtS+C4yzemPDeAYbCj4jEFh/vKpUZfy7Kntr5mWWNy1KFTKQ6PTcXBBBBUjQjQzkcD2hpivWGPQ0sRTDtTSpY0xTAJHweRcgG7ak62Nu6M+xFVxQrtVUIaytiEA0GR2fSw00sDfpUWRcb3UyzqOOpaunu30t/qE3vi0HO9t8oJt622kevhHWqaVMmp3EHhs3hDMGsbWGYa6A6bc7fBdk3cAsdeQRM9v1Huj2HvNt5scJ5Y/gud2rkxqE2v8AMEDpvtzHzkiY8b7PPhypfvI5srEKHDAXyHKbWIzHb71+U1YNyVsTcqSpPW2xPmQQfeXcfJM5tVy8Xsb4iJaoIiICIiAiIgIiJBCIiEkREBPCes9mvErdHA3KN+xik7QSxys48TXIHtZR+3vefWMDw5QqUyL0qKoiIdmZVF3b71tgDzBO9rfJ2qWZDfuki/sVb9gZ9sM831Fu49PgnbViXRUYvbIAS2YXFvTn6Sro8OZ1IJelRaxWkpGYeZYg5ORyJa1t9SJJxoz1qKHwgPUI5EoUVAfRnDeqCWMzr/t8c47wT+ExRUElal2F+tyG157idD2Z4XTFOnXIzVHUHM32Cd1QbLbUX3NtTJH/AElUf+rVOYd0/vBX/wBB+cw7J1L4cD7tSoP8ZYfRhNnHd4TbNnNZV03ZpB8APuaju5PXMxCfJAi/pmnDEYnENUuGo0HKUwLENVA79Q23y3yL55z0mfZyuAhoGwemWsNs1MsSjL1ABCnzU+Ux4l2eR3NWkxo1jbMyXAe338hBJ87+oMy5eMrtdOppn2l7QUsFSLubsdEQeJm6DoOp5fKcVhuxmIxCtjWqfBxjsKlJVAVFA2VrC4JFvTnckywPZXEjFDE1Mldh4PitnVbbEKMgFuljqb76yz4txuvQQu9XC0+gsXdieSrnA9zoLG86l9vjHss32r+Ddp3rVqFGvTKYulUdaq2sCjI13B2AzBDbncZb3Ev+O4pErYRajhE+I73OilkQqgY7AZnBudLgeU4Xh1Z3qGu1R3qMRdxeygDu5KdNCxtc21Qi50vqZ2KqMj06lTEPUC5wtLEYXEKjZ7Iy5zmfUlRqCL20iyb8IlukrtnQXiGIpYKkFzJd61a2b4S20UHq1wSPy+dodPjFWkzYfFIRWoYXErnWwR6JRSj8udNV0HPreS+Erh0Z/gHEYUuQXApO1NiNirlCANTyXnMkw1KpVSjSf4pqVVOJqs12daf9r8NcxJyXUX9QNbHLO/rXhF/lZ8C7OEJnqsVaoS7Ilge9qA72zEgWFlta1td5MxPDaaVqXjKvmQg1atwwVqisDnuNEcHrdekvpXYnv16KD/d5qjeWZWpID653P6JXu27Wakjn+39EJgSC7Ofip8POQWBNxbNu1hmNzc9SZxeB+3+fT+4gl5274qtWoKYN6dAksRsanO3XKLj1ZhylPhEKoL+I3J8ixvb2vb2m/wBNjZj5YvU5S+G6IiamIiIgIiICIiAiIghERCSIiAiIgVVWhdGTmpIHpy+an6z692fx/wAfD06n2igDjo691x8wfpPlmLSxD8rWb05H2/Y+Ut+zGOr4c1Hp0nq0PFWVATlNvGh2zW3HS17aGYfU4zXmt/p830DGrlenVtcIHR7bhHyktbnZkS/lmPKTBK/h/G8PXANOopNr5Scrj1VtZ7xF0t/aVlSlbvd4IW8i5PdHkLHz5THq9Vq3O3Ldv6megKl/7OnXRUPJms4d/MDRQeofykHsfiFtVQsM3xMyrfUqUTvAcxcEXkftr2qSoaWGw6jIGBL2sO6DZUUjw+e3TTWVC4dGZSoyHMNFJRCdrgjWkfxLprtzmzixvt1Wfks9z7Bw/gdJqJqV16srAlWUD7SspDKT5HUes5+klZ64RMTWWnZncH4ZIQEBVVsma5v4r3AU8yCIB7buq/w1e5UEXcqA6gbLUC91xe3fTyuNzJqkkrUpOA2U5WFnRlaxswv3l0B0IOmh3jPDc/sxy1VTx7iGHoXZ6NMDMVVq4fEVHI37pbTrcsd9bbTRwPt9ggctREpjYNTo5V91BY+95q7TYsHXF4BagYgB6NYjM2tiFK5g1gdr7akyPwfsqtchlwCUU3z16tWobeSKVBPkTKfbJP1Ld7v6X0bhvFKWIXNRcOvlce9jy89pUdsaIdEG7l0VFG5LV6GvtlE20ODphHR6ACIzKlZF0Rs5CK6rrkYMV23Um97Cau0S/Er0KK3DMjsWUnMq5kpEjoctVyDyKqeUqmt+HV68qftD2/oYc/BoHOyd1mVQyC2lgcy3N+YuJI7PcZXiIAqJZhmKVUXI6OttrlrGzjUEg6ggbHdxDsiqqP4elhrqNBVoU2vbqwsSfO/zkLDYmqKVRKzLSNO6vTwyZAQRdcrHvagjbKbgzuSZeMe3Ntnmum4bxhHpIXqIXtZgpFy6kqSqAk62uB5ym7UcZGGR0otfE1O+zG2ZEOmbXQHKLKp6XOxvATtglPDUkpKDXFFFclbJTZVCnOftEEHur01InKrTaoxeoS2ZsxzeJ2++/wBLLsABpsBZxcFuXnpXyc0xxYYWlnytY5Bqoa92O4Y31tz11J19Z8RPRxx1HnZZXK7pEROkEREBERAREQEREhEIiISREQEREBLLgvHKmFUpTQFe9lFwFuxv3juB5C9wB4ba1sSrm4cOWayn9rOPly47uIJwjEBSEYADe4+mU2mC4Ag6Ki+a7/5ZYxOvjh8uSjxeACsjlszkn0AA1+pEnzTxFrug6L/mP/xm6V2SXwvxtuO6mY4B1SoRe4yv1zrpe/IlbfWTeyGIyvUpXOUhmUcrq5ViByvmUm2l9ech8P7+akdnHd8nGq/PUe8y7NcPerisi6KA4qnUEIyoWAI2YsLD3PKc52SbrrGXenecHwquTWcAjVaQOoy/ae34iNPwqp5mWWKSoSpRgAEe4OxYgZPYG/zkhFAAAFgAAANgBsBM552WXuu2zHHU0jYCqXpozCzMilgeTWGYexv8pX4inbHUX+9h6qD1DI/7X+UuZT8eOR8NV5JXCt+Woppm/kM1/wBMiJqyxVHOjJmKkjRl3UjUMPQgG05ztnQK0zWGvcCVLDe5ujW8n09Kh6TqZpxWHWojo/hdSp9CLaecnDL25Soym5p8ew+FGpYlrO9gfCO+bacz5mTJiuGemzo/jR3DeeujAcgRZh5MJlPYw1qWPI5N+67IiJ24IiISREQEREBERARESEQiIhJERAREQEREBERAqMQb1W8mUfID+pMlSHlKuQ25dm9QSSCPpJkz/bXj1GdF8rKx2DKdNToRsBuZ9P4Bw74SM7KFqVWzv5fdT9I+pY85xHZHAfFxKEjuUxnbpmBsgPuS3/hz6bMvqM/PtjTw4/8AoiImVeSv45hPi0KiWuSpIA0JI1sDyvt7ywnggQOCY341FHJuwGV/zDc25XFm9GEsJRYFhSxNSlawdVZehBvYjle4ZT6LL2ShxXbbAZXSuo0fuP8AmAJRvcZlv5LOZn0rj2D+Nh6qDxFLp+de8n+ICfM0cMARsQCPfWej6XPePt/h53qsNZe6fbKIia2UiIhJERAREQEREBERIRCIiEkREBERAREQEREDVWwBrlUXxAOym9rED0N99ucrQ702yVBY8iPCw6qf6biXmCqotannvY5wLGxzEC1jcS5xPDsO6Vw4rEZAyBhicqOD4iSMo33O0z53WTVxT9KZ/wBHaApXfmaiLfyVAw+rmdjPn3YGsKFWph2dXFQB0YEXuvdIYDY2K+tp3WKxK01zvfKCMx5KCbZm6KL3J5C55Tz+X99bePqN8SOmKQkjOMwbLlJs17EgAHe4BItuBcSRK1hERAoO1dA5Erp46TD+6xG/kGCN6KesusPWDojr4WUMPRhcfvMcXQFRHQ7OjKf1Aj+sqOxeL+JhKd/EudWHTK7AfQCdfSPteZhcC++3nz0nyW+r2tYVKgFtrK7KPoBO74vjPh56jOD8MuyKmuVTTVTmPNr57D8QnB0gQov4t29TqfqTNfpO7WP1d8SMoiJ6DCREQEREBERAREQEREhEIiISREQEREBERAREQIWPPeTu5hle42JHcGnK+vPQ7abjoezXG3ValN3U0mplVqOjPzHcqkOrLyGbcaX6nn8T40/I/wBSn/pJWFw5PxmU2tRXMv2XBzEhx1sRZtxpuNDTnN1p47rGLfimDqAAoiBlIZHU1MoYcmBzXBFwRfY7ybwvt7TZclZStUd1kIYtfoLA5h59JV9mKiMjIaWbLYqVCBwjXAUksCcpUjS9tJG7QdnFqHMjVBUGzFajN+ViAQR6GZs+OZdtGOdjucJj3ygUsFUyDw3eiotuMoZ8wAvtYWm08RxP/Yn9qtH/AJ58T/imoNavQB3syl6DHzulgfcXnU8Nx6lAyrXW/TE1f+axlN4b9Tf/AH5WfJJ3dPoC8TxJ/wCBcetWhb6PNhxWLPhw9Jfz1j/oQzi045VXwviR6vTqf+YDNq9oKp0arifYYUfVQDIvDn/B82N+46tExap3quHpgXJbK9SwuSBdmQaDS56TlqNfh9DMn8bWqksxKUblbsxZrGkl9yftTTXxFB9aq1Kmt/7Q/Et6K75R7Wm9OLUkFqdCppsCadNf8GcxOPP6l/0Xkw+7GzG4vDCiSuCqMpyqGrOVbvMFDd52cWJB2BlEoNhc3NtT185Kx+NetYMFRAQQiXNyNQXZjdrHUbDykabvT8dxl9zF6jkxys9pERNLMREQEREBERAREQEREghERCSIiAiIgIiICImvEVcilt+g6k7CCTaK/eqORyCoPXVj/mA9pc8LS6YsjbVR+hSn+m8qML3BmOuQM5/Ew1HzYge8vOCoEw1TMeTAk8+6B9TKe61a1NKfg9f4ddSWKrmysV5LU1XQgg99enOdkMSo/wCJX9ZpA+4spnB1UJIymxYFQejeJG9Qy2/VO3w3Es6I4dBmUHv06mlxqNHA0leSyKHtnlZEHxEclzcJ8M6ZSLnKSd2WVvDAArKPsuR9AR9CJK7T4gvVpIWVrC/cVlHeOb7TG/8AL+sh0Gyv5OP8S3/cf5Z1h4qvlm8U2IiaGSEREJIiICIiAiIgIiICIiAiIgIiIRCIiEkREBERARItXiCKbZrtcCyjMbnQA20HvPFqV3/lUfdje3st/wB5zcpHcwyv0k1aqoMzGw/+6DqfKQcxdg7CwHgU7j8TeZ+g9TNX8PUzXd1zi4uFuR6XJUewm5EI3dj75fogE4uW1uOExZBGdxTUakqW9d1X5949Mq9Za8VcIqUFOii7nqx1/wDf5TZwekKaPXYbAhB1J3PudPnKh3LEs2pJJPvIdtdS9rjcWZfVTmH1El4fiVRRlo1iEF8oHw2Fib/aU9ZDK5/yXt+Yjceg59TpyMVUB0tqxVb2+8Qt/rOal5XrNUqgu+dlQlicpI1AW+UWG7fOZVKeYW26EbgjUEeYniKCQmzD+Ww0Og8H5gL26rcHbX1H1s1gTsRoreX4W8tjy6QNmHxeyvZX2B2V/wAp5H8P7yXIToCCCLjmD/WYorL4GsPut3l9uY9jbyneOX8qsuL7ifE1fEZVDOhRTs+6H9Q8P6rTbLJZVNxs7IiJKCIiAiIgIiICIiAiIgIiIRCIiEkREDCtVVFLMbKBrKlqr1jY3RPug2Yj8TDb0H1mPFMRmqZdwmyjcta9/QAjyuTJOBwJcqGuxYiyKSE/Ww1b0Fh6yrLLd1GjDCSbrLAYJXcqis4tZlQDKo00JPdU+uu+hl2nEDh1+GWRgbhGD5sjXtkqNYXN9mNr7HXUz62LTDIEUDMBoqgADzIGw8pyZp/E12RjoB9vzN9k6dfIb89LJ5bmBub7877385vwOFNR1Qe56DmZBpVjbZmUaA7stuRA1Zf8Q212F/gMYlGkXQNUZgLsg7muy52sp8wLnyiFecexAutJNFQC4HW2g9h+8pT3jlBtpdiN1Xy/Edh7nYGYO1RySxVbkk27xufM2H0mdJMoIJJ7xNzu1xvtraxGm1h1js02M3QWAAAA2AGwExXxp5Zif0oxH1yxPafiY9EI92dLfRWgYugYWPlqNCCNQQeRB1vPM2YMGAzDRxbusDswHQ8xyN+REymLgghlF2F9DoGB3UnofoQDykD1TbRjpyY7jyc8x+Llz01GRFt56wGhGqkXU+W1j0IIII6gwMNUCB7dwswS40stgQpGuhuNb25eTYnYDigpKyuM1Ig5hvbrpzHlK9SKbJl1pONPu03Yk/DB6Dw2OxHnIeLYtZB3dmN9RoRlF+ha1/IecyannpkKxVj117wOzDqp0B3FhvtJmWkZYyzS3ia8NVzIj/eUEjobaibJeyWaIiICIiAiIgIiICIiAiIhEIiISRESUucp+KoeZqtc/qM63s7/ADG8k0+cRM321/Skxet763Zb31vqu/Wb6niPqZ7Ek+mqvs/5G/aX3aD+XRHKx09liIiFHT3HqP3nS1MOhwOLYqpZWbK1hmXL4cp3Frm3S8RKubqfmLOPv/DmRsPQTynvU9KX71YiWuHsREJjKl4G8qzW/upO6RB/sqjoP5VI+5YXPqcx+ZiJTzdz8rOPq/h8+qfzE/I/7pPKPjqfm/okRLVSRwz+WPzP/naS4iXz9sZcv3UiIkuSIiAiIgIiICIiB//Z"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Anna Becker</span>
              <span className="userShowUserTitle">Software Engineer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentityIcon className="userShowIcon" />
              <span className="userShowInfoTitle">annabeck99</span>
            </div>
            <div className="userShowInfo">
              <CalendarTodayIcon />
              <span className="userShowInfoTitle">10.12.1999</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroidIcon />
              <span className="userShowInfoTitle">+1 123 456 67</span>
            </div>
            <div className="userShowInfo">
              <LocationSearchingIcon />
              <span className="userShowInfoTitle">anna.beck@gmail.com</span>
            </div>
            <div className="userShowInfo">
              <PermIdentityIcon />
              <span className="userShowInfoTitle">New York | USA</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form action="" className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label htmlFor="">Username</label>
                <input
                  type="text"
                  placeholder="annabeck99"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label htmlFor="">Fullname</label>
                <input
                  type="text"
                  placeholder="Anna Becker"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label htmlFor="">Email</label>
                <input
                  type="text"
                  placeholder="anna.beck@gmail.com"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label htmlFor="">Phone</label>
                <input
                  type="text"
                  placeholder="+1 123 456 67"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label htmlFor="">Address</label>
                <input
                  type="text"
                  placeholder="New York | USA"
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  src="data:image/jpeg;base64,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"
                  alt=""
                  className="userUpdateImg"
                />
                <label htmlFor="file">
                  <PublishIcon classname="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
