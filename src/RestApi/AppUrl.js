
class AppUrl{
    //static BaseUrl = 'http://10.10.10.117/VisaCovidCenterDevelopment/public/';
    static BaseUrl = 'http://192.168.31.150/VisaCovidCenterDevelopment/public/';
    // static BaseUrl = 'https://visacovid.com/';
    static UserCreate = this.BaseUrl+'api/user/create';
    static UserLogin = this.BaseUrl+'api/user/login';
    static OtpCheck = this.BaseUrl+'api/user/otpCheck';

    static OtpResend = this.BaseUrl+'api/otpResend';

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

    // Service time status check
    static vaccinationLeftTime = this.BaseUrl+'api/home/vaccination/leftTime';
    static pcrLeftTime = this.BaseUrl+'api/home/pcr/leftTime';
    static boosterLeftTime = this.BaseUrl+'api/home/booster/leftTime';

    // Profile section
    static userProfile = this.BaseUrl+'api/home/profile';
    static editUserProfile = this.BaseUrl+'api/home/editProfile';
    static updateUserProfile = this.BaseUrl+'api/home/updateProfile';

    static profileInformation = this.BaseUrl+'api/home/profileInformation';

    // Information
    static vaccinationInformation = this.BaseUrl+'api/home/vaccinationInformation';
    static pcrInformation = this.BaseUrl+'api/home/pcrInformation';
    static boosterInformation = this.BaseUrl+'api/home/boosterInformation';

    // Synchronize data
    static synchronize = this.BaseUrl+'api/home/synchronizeInformation';

}

export default AppUrl;
