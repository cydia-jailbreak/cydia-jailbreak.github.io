Lang = lang;
if (Lang == "vi") {
var days = ["Chủ Nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy"];
var months = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
var conditiontext = "Hiện tại ";
var humtext = "Độ ẩm ";
var windtext = "Gió ";
var raintext = "Mưa ";
var lotext = "Thấp ";
var hitext = "Cao ";
var charging = "Đang sạc...";
var notcharging = "Không sạc";
var amlichtext = "Âm lịch: ";
var condition = ["có bão", "bão nhiệt đới", "có bão", "có dông", "có dông", "có tuyết", "mưa đá", "mưa đá", "mưa phùn lạnh", "mưa phùn", "mưa lạnh", "mưa rào", "có mưa", "có bão", "mưa tuyết", "có tuyết", "có tuyết", "mưa đá", "mưa tuyết", "gió bụi", "sương mù dày", "sương mù nhẹ", "sương mù", "gió mạnh", "có gió", "trời lạnh", "có mây vài nơi", "trời nhiều mây", "trời nhiều mây", "có mây vài nơi", "có mây vài nơi", "quang mây", "có nắng", "trời quang mây", "trời quang nắng", "mưa đá", "trời nóng", "có sấm sét", "có sấm sét", "có sấm sét", "mưa lớn", "có tuyết", "tuyết rơi nhẹ", "tuyết rơi nhiều", "ít mây", "có dông", "có tuyết", "có dông", "blank"];
}

if (Lang == "en") {
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var months = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
var conditiontext = "Present ";
var humtext = "Humidity ";
var windtext = "Wind ";
var raintext = "Rain ";
var lotext = "Low ";
var hitext = "High ";
var charging = "Charging...";
var notcharging = "Not charging";
var amlichtext = "Lunar: ";
var condition = ["tornado", "tropical storm", "hurricane", "severe thunderstorms", "thunderstorms", "mixed rain and snow", "mixed rain and sleet", "mixed snow and sleet", "freezing drizzle", "drizzle", "freezing rain", "showers", "showers", "snow flurries", "light snow showers", "blowing snow", "snow", "hail", "sleet", "dust", "foggy", "haze", "smoky", "blustery", "windy", "cold", "cloudy ", "mostly cloudy", "mostly cloudy", "partly cloudy", "partly cloudy", "clear", "sunny", "fair", "fair", "mixed rain and hail", "hot", "isolated thunderstorms", "scattered thunderstorms", "scattered thunderstorms", "scattered showers", "heavy snow", "scattered snow showers", "heavy snow", "partly cloudy", "thundershowers", "snow showers", "isolated thundershowers", "not available"];
}