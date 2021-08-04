using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class CMS_detail_page : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }


    [WebMethod(EnableSession = true)]
    public static string CMS_detail_HTML(string user,string pagename, string mode)
    {
        string response = string.Empty;
        string DealJson = string.Empty;


        try
        {

            string session = commonfunction.CheckCMS_Sesion(user);

            // user will be come in request string users
            // check session of user / admin ---- session created at the time of login 
            //sp: [dbo].[CMS_CheckUserSession]
            // if present continue else unauthorized error

            if (session == "")
            {
                return "unuthorized";
            }


            using (SqlConnection con = new SqlConnection(commonfunction.conn))
            {
                using (SqlCommand cmd = new SqlCommand())
                {
                    cmd.Connection = con;
                    cmd.CommandType = CommandType.StoredProcedure;

                    cmd.CommandText = "dbo.CMS_getpage";
                    cmd.Parameters.AddWithValue("@pagename", SqlDbType.VarChar).Value = pagename;
                    cmd.Parameters.AddWithValue("@mode", SqlDbType.VarChar).Value = mode;
                    

                    using (SqlDataAdapter adapter = new SqlDataAdapter(cmd))
                    {

                        DataSet ds = new DataSet();
                        adapter.Fill(ds);
                        DealJson = JsonConvert.SerializeObject(ds);
                    }
                }
            }

        }
        catch (Exception ex)
        {
            commonfunction.WriteLog("CMS_detail_HTML exception", ex.ToString(), DateTime.Now, DateTime.Now);
            return "Error 404";
        }
        return DealJson;
    }

    [WebMethod(EnableSession = true)]
    public static string CMS_detail_ModifyHTML(string user,string PageName, string PageData, string userid)
    {
        string response = string.Empty;
        string DealJson = string.Empty;


        try
        {

            string session = commonfunction.CheckCMS_Sesion(user);
            if (session == "")
            {
                return "unuthorized";
            }

            using (SqlConnection con = new SqlConnection(commonfunction.conn))
            {
                using (SqlCommand cmd = new SqlCommand())
                {
                    cmd.Connection = con;
                    cmd.CommandType = CommandType.StoredProcedure;

                    cmd.CommandText = "dbo.CMS_Modifypage";
                    cmd.Parameters.AddWithValue("@pagename", SqlDbType.VarChar).Value = PageName;
                    cmd.Parameters.AddWithValue("@pagedata", SqlDbType.VarChar).Value = PageData;
                    cmd.Parameters.AddWithValue("@userid", SqlDbType.VarChar).Value = userid;

                    con.Open();
                    int k = cmd.ExecuteNonQuery();
                    con.Close();
                    if (k > 0)
                    {
                        response = "success";
                    }
                    else
                    {
                        response = "error";

                    }
                }

                



            }

        }
        catch (Exception ex)
        {
            commonfunction.WriteLog("CMS_detail_ModifyHTML exception", ex.ToString(), DateTime.Now, DateTime.Now);
            return "Error 404";
        }
        return response;
    }
}