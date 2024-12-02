GlobalNews

Description
GlobalNews is a web-based application that fetches real-time news articles from various global sources. The app allows users to search for news based on topics, ensuring they stay up-to-date with the latest happenings around the world.

Website URL
>> https://didierdrin.github.io/globalnews

Benefits
I developed GlobalNews to provide users with easy access to the latest news articles in a simple and intuitive way. Whether it’s breaking news or trending topics, GlobalNews helps users find the information they need quickly, without having to search across multiple sources.

Features
API Integration:
Fetches real-time news data from NewsNow API, providing up-to-date articles based on user queries.

User Interaction:
Allows users to search for specific news by entering keywords or topics in a search bar.

Frontend:
Simple, intuitive, and user-friendly interface built with HTML, CSS, and JavaScript.
Users can easily browse through articles and click on them for more details.

Error Handling:
Gracefully handles API downtimes or errors during data fetching, ensuring a smooth user experience even during issues.

Special Thanks:
Special thanks to NewsNow for providing the API that powers the core of GlobalNews. Their reliable and comprehensive news sources make this application possible.

TECHNOLOGIES USED

Frontend:
HTML, CSS, JavaScript

APIs Used:
NewsNow API: Fetches real-time news articles based on topics and regions.

Deployment:
Nginx
For deployment, the scp command was used to transfer the project files from the local machine to the server. A new directory called GlobalNews was created under /var/www/, which was then referenced in the Nginx configuration file located at /etc/nginx/sites-available/GlobalNews. This directory is set as the root to serve the HTML files.

A symbolic link was then created in /etc/nginx/sites-enabled/ named GlobalNews using the ln -s command, ensuring that the server knows where to look for the website files.

HAProxy
In the load balancing configuration, two servers, web01 and web02, were set up to handle incoming requests. Routing was configured so that based on specific routes, the requests were forwarded to the appropriate server, ensuring efficient load distribution and seamless access to the application.
