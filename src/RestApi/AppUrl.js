
class AppUrl{
    static BaseUrl = 'http://10.10.10.109/VisaCovidCenterDevelopment/public/';
    static UserCreate = this.BaseUrl+'api/user/create';
    static UserLogin = this.BaseUrl+'api/user/login';
    static OtpCheck = this.BaseUrl+'api/user/otpCheck';

    //Slider
    static Slider = this.BaseUrl+'api/home/slider';

    //Service Registration
    static Country = this.BaseUrl+'api/home/country';
    static State = this.BaseUrl+'api/home/state';
    static City = this.BaseUrl+'api/home/city';
    static Center = this.BaseUrl+'api/home/center';

    static Vaccine = this.BaseUrl+'api/home/vaccine/registration';
    static PCR = this.BaseUrl+'api/home/prc/registration';
    static Booster = this.BaseUrl+'api/home/booster/registration';


    // Service status check
    static VaccineStatus = this.BaseUrl+'api/home/vaccine/statusCheck';
    static PcrStatus = this.BaseUrl+'api/home/pcr/statusCheck';
    static BoosterStatus = this.BaseUrl+'api/home/booster/statusCheck';

}

export default AppUrl;
