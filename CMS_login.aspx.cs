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

public partial class CMC_login : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }

    [WebMethod(EnableSession = true)]
    public static string login(string userid, string pass)
    {
       
         string DealJson = string.Empty;


        try
        {
            using (SqlConnection con = new SqlConnection(commonfunction.conn))
            {
                using (SqlCommand cmd = new SqlCommand())
                {
                    cmd.Connection = con;
                    cmd.CommandType = CommandType.StoredProcedure;

                    cmd.CommandText = "dbo.CMS_userlogin";
                    cmd.Parameters.AddWithValue("@userid", SqlDbType.VarChar).Value = userid;
                    cmd.Parameters.AddWithValue("@password", SqlDbType.VarChar).Value = pass;

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
            commonfunction.WriteLog("CMS_login exception", ex.ToString(), DateTime.Now, DateTime.Now);
            return "Error 404";
        }
        return DealJson;
    }


    [WebMethod(EnableSession = true)]
    public static string CMS_logout(string user)
    {
        string response;


        try
        {
            using (SqlConnection con = new SqlConnection(commonfunction.conn))
            {
                using (SqlCommand cmd = new SqlCommand())
                {
                    cmd.Connection = con;
                    cmd.CommandType = CommandType.StoredProcedure;

                    cmd.CommandText = "dbo.CMS_logout";
                    cmd.Parameters.AddWithValue("@userid", SqlDbType.VarChar).Value = user;


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
            commonfunction.WriteLog("CMS_logout exception", ex.ToString(), DateTime.Now, DateTime.Now);
            return "Error 404";
        }
        return response;
    }


    [WebMethod(EnableSession = true)]
    public static string CMS_checktoken(string userid)
    {
        string response;


        try
        {
            using (SqlConnection con = new SqlConnection(commonfunction.conn))
            {
                using (SqlCommand cmd = new SqlCommand())
                {
                    cmd.Connection = con;
                    cmd.CommandType = CommandType.StoredProcedure;

                    cmd.CommandText = "dbo.CMS_tokencheck";
                    cmd.Parameters.AddWithValue("@userid", SqlDbType.VarChar).Value = userid;

                    using (SqlDataAdapter adapter = new SqlDataAdapter(cmd))
                    {

                        DataSet ds = new DataSet();
                        adapter.Fill(ds);
                        response = JsonConvert.SerializeObject(ds);
                    }


                }
            }

        }
        catch (Exception ex)
        {
            commonfunction.WriteLog("CMS_logout exception", ex.ToString(), DateTime.Now, DateTime.Now);
            return "Error 404";
        }
        return response;
    }
}