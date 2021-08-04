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

public partial class CMS_pages : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }

    [WebMethod(EnableSession = true)]
    public static string CMS_pagelist(string pagename)
    {
        string response = string.Empty;



        string DealJson = string.Empty;


        try
        {
            using (SqlConnection con = new SqlConnection(commonfunction.conn))
            {
                using (SqlCommand cmd = new SqlCommand())
                {
                    cmd.Connection = con;
                    cmd.CommandType = CommandType.StoredProcedure;

                    cmd.CommandText = "dbo.CMS_pagelist";
                    //cmd.Parameters.AddWithValue("@pagename", SqlDbType.VarChar).Value = pagename;

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
            commonfunction.WriteLog("CMS_pagelist exception", ex.ToString(), DateTime.Now, DateTime.Now);
            return "Error 404";
        }
        return DealJson;
    }


    [WebMethod(EnableSession = true)]
    public static string CMS_AdminApprove(string pagename, string userid)
    {
        string response = string.Empty;
        //string DealJson = string.Empty;


        // check session

        try
        {
            using (SqlConnection con = new SqlConnection(commonfunction.conn))
            {
                using (SqlCommand cmd = new SqlCommand())
                {
                    cmd.Connection = con;
                    cmd.CommandType = CommandType.StoredProcedure;

                    cmd.CommandText = "dbo.CMS_Approvepage";
                    cmd.Parameters.AddWithValue("@pagename", SqlDbType.VarChar).Value = pagename;
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
            commonfunction.WriteLog("CMS_AdminApprove exception", ex.ToString(), DateTime.Now, DateTime.Now);
            return "Error 404";
        }
        return response;
    }
}